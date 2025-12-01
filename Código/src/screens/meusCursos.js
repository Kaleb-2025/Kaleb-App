import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { supabase } from '../../App';

const { width } = Dimensions.get("window");

export default function TelaMeusCursos() {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("Em progresso");
    const [userData, setUserData] = useState(null);
    const [cursos, setCursos] = useState([]);
    const [categorized, setCategorized] = useState({
        progresso: [],
        concluidos: [],
        naoIniciados: [],
    });

    const logica = require("../assets/logica_logo1.png");
    const python = require("../assets/python.png");

    // Buscando os dados do usuário
    useEffect(() => {
        const fetchData = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) return;

            const { data: info } = await supabase
                .from("info_user")
                .select("cursoandamento")
                .eq("idusuario", user.id)
                .single();

            const { data: cursosData } = await supabase
                .from("cursos")
                .select("*");

            if (info && cursosData) {
                setUserData(info);
                setCursos(cursosData);

                // separando os cursos conforme esses dados
                const idAndamento = Number(info.cursoandamento);
                const progresso = cursosData.filter(
                    (c) => Number(c.id) === idAndamento,
                );
                const concluidos = cursosData.filter(
                    (c) => Number(c.id) < idAndamento
                );
                const naoIniciados = cursosData.filter(
                    (c) => Number(c.id) > idAndamento
                );

                setCategorized({
                    progresso,
                    concluidos,
                    naoIniciados,
                });
            }
        };

        fetchData();
    }, []);

    // Lógica para navegar (por enquanto...)
    const handleButtonVer = (cursoId) => {
        if (cursoId === 1) navigation.navigate("CursoLogica");
        else navigation.navigate("CursoPython");
    };

    const handleButtonContinuar = (cursoId) => {
        if (cursoId === 1) navigation.navigate("TelaCurso");
        else navigation.navigate("TelaCursoPython");
    };

    // Lista
    const currentCourses =
        selectedTab === "Em progresso"
            ? categorized.progresso
            : selectedTab === "Concluídos"
                ? categorized.concluidos
                : categorized.naoIniciados;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Meus cursos</Text>
                    <View style={styles.separator} />

                    {/* Indicador e estatísticas */}
                    <View style={styles.cardRow}>
                        <ProgressIndicator total={cursos.length} progress={1} />
                        <View style={styles.statsColumn}>
                            <View style={{ marginBottom: 16 }}>
                                <StatCard
                                    number={categorized.naoIniciados.length}
                                    label="Não iniciado(s)"
                                />
                            </View>
                            <View style={styles.statsBottomRow}>
                                <StatCard
                                    number={categorized.progresso.length}
                                    label="Iniciado(s)"
                                />
                                <StatCard
                                    number={categorized.concluidos.length}
                                    label="Concluído(s)"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Abas */}
                    <View style={styles.abaCard}>
                        <View style={styles.tabsContainer}>
                            {["Em progresso", "Não iniciados", "Concluídos"].map(
                                (label, index, arr) => (
                                    <TouchableOpacity
                                        key={label}
                                        style={[
                                            styles.tab,
                                            selectedTab === label
                                                ? styles.tabActive
                                                : styles.tabInactive,
                                            index !== arr.length - 1 && { marginRight: 4 },
                                        ]}
                                        onPress={() => setSelectedTab(label)}
                                    >
                                        <Text
                                            style={[
                                                styles.tabText,
                                                selectedTab === label
                                                    ? styles.tabTextActive
                                                    : styles.tabTextInactive,
                                            ]}
                                        >
                                            {label}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            )}
                        </View>
                    </View>

                    {/* Lista dinâmica */}
                    <View style={styles.coursesContainer}>
                        {currentCourses.map((course) => {
                            const bloqueado = selectedTab === "Não iniciados";

                            return (
                                <View key={course.id} style={[styles.card, styles.cardDivider]}>
                                    <View style={styles.cardLeft}>
                                        <Text style={styles.courseTitle}>{course.titulo}</Text>
                                        <Image
                                            source={course.id === 1 ? logica : python}
                                            style={styles.courseImage}
                                        />
                                    </View>

                                    <View style={styles.cardRight}>

                                        {/* Botão Continuar / Rever / Bloqueado */}
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                bloqueado && { backgroundColor: "#ccc" }
                                            ]}
                                            onPress={() => !bloqueado && handleButtonContinuar(course.id)}
                                            disabled={bloqueado}
                                        >
                                            <Text style={styles.buttonText}>
                                                {bloqueado
                                                    ? "Bloqueado"
                                                    : selectedTab === "Concluídos"
                                                        ? "Rever"
                                                        : "Continuar"}
                                            </Text>
                                        </TouchableOpacity>

                                        {/* Botão Ver mais / Bloqueado */}
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                bloqueado && { backgroundColor: "#ccc" }
                                            ]}
                                            onPress={() => !bloqueado && handleButtonVer(course.id)}
                                            disabled={bloqueado}
                                        >
                                            <Text style={styles.buttonText}>
                                                {bloqueado ? "Bloqueado" : "Ver mais"}
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            );
                        })}

                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")} >
                    <Image source={require("../assets/iconhome.png")} style={styles.navIcon} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("MeusCursos")} >
                    <Image source={require("../assets/iconcursos_preto.png")} style={styles.navIcon} />
                    <Text style={styles.navText}>Cursos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("TelaPerfil")} >
                    <Image source={require("../assets/iconusuario.png")} style={styles.navIcon} />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// --- COMPONENTES SECUNDÁRIOS ---
const ProgressIndicator = ({ total }) => (
    <View style={styles.progressContainer}>
        <View style={styles.absolute}>
            <Svg width={120} height={120} viewBox="0 0 148 148" fill="none">
                <Path
                    d="M74 6.1665L79.9121 6.42463L85.7791 7.19704L91.5566 8.47787L97.2004 10.2574L102.668 12.522L107.917 15.2544L112.908 18.434L117.602 22.0365L121.965 26.0344L125.963 30.3974L129.566 35.0922L132.745 40.0832L135.478 45.3322L137.742 50.7995L139.522 56.4433L140.803 62.2207L141.575 68.0878L141.833 73.9998L141.575 79.9119L140.803 85.779L139.522 91.5564L137.742 97.2002L135.478 102.667L132.745 107.916L129.566 112.907L125.963 117.602L121.965 121.965L117.602 125.963L112.908 129.566L107.917 132.745L102.668 135.478L97.2004 137.742L91.5566 139.522L85.7791 140.803L79.9121 141.575L74 141.833L68.0879 141.575L62.2209 140.803L56.4435 139.522L50.7997 137.742L45.3324 135.478L40.0834 132.745L35.0924 129.566L30.3976 125.963L26.0346 121.965L22.0367 117.602L18.4342 112.907L15.2546 107.916L12.5221 102.667L10.2575 97.2002L8.47805 91.5564L7.19722 85.779L6.42481 79.9119L6.16669 73.9998L6.42481 68.0878L7.19722 62.2207L8.47805 56.4433L10.2575 50.7995L12.5221 45.3322L15.2546 40.0832L18.4342 35.0922L22.0367 30.3974L26.0346 26.0344L30.3976 22.0365L35.0924 18.434L40.0834 15.2544L45.3324 12.522L50.7997 10.2574L56.4435 8.47787L62.2209 7.19704L68.0879 6.42463L74 6.1665Z"
                    stroke="#E8DEF8"
                    strokeWidth={6}
                />
            </Svg>
        </View>

        <View style={[styles.absolute, styles.center]}>
            <Text style={styles.progressText}>{total}</Text>
            <Text style={styles.progressLabel}>Cursos</Text>
        </View>
    </View>
);

const StatCard = ({ number, label }) => (
    <View style={styles.statCard}>
        <Text style={styles.statNumber}>{number}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
        marginVertical: 20,
    },
    separator: {
        height: 1,
        backgroundColor: "#e8dff8",
        width: "90%",
        marginVertical: 15,
    },
    cardRow: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    statsColumn: {
        flex: 1,
        marginLeft: 10,
    },
    statsBottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    statCard: {
        alignItems: "center",
        flex: 1,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 15,
        color: "#6B7280",
        textAlign: "center",
    },
    progressContainer: {
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    absolute: { position: "absolute" },
    center: { justifyContent: "center", alignItems: "center" },
    progressText: { fontSize: 28, fontWeight: "700", color: "#111827" },
    progressLabel: { fontSize: 16, color: "#6B7280", fontWeight: "600" },

    abaCard: {
        width: "90%",
        backgroundColor: "#fff",
        marginBottom: 0,
    },
    tabsContainer: {
        flexDirection: "row",
        width: "100%",
    },
    tab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "#ccc",
    },
    tabActive: { backgroundColor: "#fff" },
    tabInactive: { backgroundColor: "#ccc" },
    tabText: { fontSize: 16, fontWeight: "600" },
    tabTextActive: { color: "#0B155C" },
    tabTextInactive: { color: "#555" },

    coursesContainer: {
        width: "90%",
        alignSelf: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#fff",
        overflow: "hidden",
        elevation: 3,
        alignItems: "center",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        width: "100%",
    },
    cardDivider: {
        borderBottomWidth: 3,
        borderColor: "#e8dff8"
    },
    cardLeft: {
        alignItems: "left",
        justifyContent: "center",
        flex: 1,
    },
    courseTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    courseImage: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    cardRight: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    button: {
        backgroundColor: "#0B155C",
        borderRadius: 50,
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5,
    },
    buttonText: { color: "#fff", fontWeight: "600", textAlign: "center" },

    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: "#e5e7eb",
    },
    navItem: { alignItems: "center" },
    navIcon: { width: 30.5, height: 28, marginBottom: 4 },
    navText: { fontSize: 12, color: "#4b5563" },
});
