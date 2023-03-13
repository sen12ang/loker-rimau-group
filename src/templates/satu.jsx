import {
    Document,
    Page,
    Text,
    Image,
    Font,
    StyleSheet,
    View,
} from "@react-pdf/renderer";

export default function Satu (props) {
    const { title, responsibilities, requirements } = props;

    return (
        <Document title={'lokershipping-'+title}>
            <Page style={styles.body}>
                <View style={{ position: "absolute", top: 0, left: 0 }}>
                    <View
                        style={{
                            width: "100vw",
                            backgroundColor: "#FBFAF5",
                            height: "12vh",
                        }}
                    ></View>
                    <View
                        style={{
                            width: "100vw",
                            backgroundColor: "#F3A80E",
                            height: "25vh",
                        }}
                    ></View>
                    <View
                        style={{
                            width: "100vw",
                            backgroundColor: "#545454",
                            height: "63vh",
                        }}
                    ></View>
                </View>
                <Image
                    style={styles.icon}
                    src="/logo.png"
                />

                <View
                    style={{
                        position: "relative",
                        zIndex: 0,
                        paddingTop: 10,
                    }}
                >
                    <Text style={styles.title}>WE'RE HIRING</Text>
                    <Text
                        style={{
                            fontSize: 10,
                            textAlign: "center",
                            fontFamily: "OpenSansItalic",
                        }}
                    >
                        RIMAU GROUP is owner company for coal mining, shipping,
                        and trading company.
                    </Text>
                </View>

                <View style={{ paddingVertical: 10 }}>
                    <Image style={styles.image} src="/image.jpeg" />
                </View>

                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "Arimo",
                            fontSize: 10,
                            color: "white",
                        }}
                    >
                        Shipping Rimau Group is a company engaged in shipping
                        services specializing in Tug Boats and Barges.
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "Arimo",
                            fontSize: 10,
                            color: "white",
                        }}
                    >
                        We're vides transportation services for coal, sand,
                        broken stone, iron ore and nickel products in all
                        regions of Indonesia.
                    </Text>
                </View>

                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: 5,
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    <View style={styles.dash}></View>
                    <Text
                        style={{
                            fontFamily: "Arimo",
                            color: "#F3A80E",
                            fontSize: 25,
                        }}
                    >
                        CREWING OFFICER - BANJARMASIN
                        {/* {title} */}
                    </Text>
                    <View style={styles.dash}></View>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: "10%",
                    }}
                >
                    <View>
                        <Text style={styles.subtitle}>Requirements</Text>
                        {requirements.map((req) => {
                            return (
                                <View
                                    key={req.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Text style={styles.dot}>•</Text>
                                    <Text style={styles.text}>{req.value}</Text>
                                </View>
                            );
                        })}
                    </View>

                    <View>
                        <Text style={styles.subtitle}>Responsibilities</Text>
                        {responsibilities.map((res) => {
                            return (
                                <View
                                    key={res.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Text style={styles.dot}>•</Text>
                                    <Text style={styles.text}>{res.value}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                    {/* -----------------------------FOOTER-----------------------------*/}

                <View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        gap: 5
                    }}
                    fixed
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: '#F3A80E',
                            borderRadius: 10,
                            gap: 15,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            width: "90%",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                width: "30%",
                                borderRadius: 10,
                                border: "2px solid black",
                                padding: 5,
                                alignSelf: "center",
                                height: "100%",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    textAlign: "center",
                                    fontFamily: "Arimo",
                                }}
                            >
                                Send your CV and Portfolio
                            </Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    textAlign: "center",
                                    fontFamily: "Arimo",
                                }}
                            >
                                to this email address
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 5,
                            }}
                        >
                            <View>
                                <Text style={styles.footer}>Email</Text>
                                <Text style={styles.footer}>CC</Text>
                                <Text style={styles.footer}>Subject</Text>
                            </View>
                            <View>
                                <Text style={styles.footer}>
                                    : hrd.rimaugroup@gmail.com
                                </Text>
                                <Text style={styles.footer}>
                                    : mariaanitas@rimaugroup.com
                                </Text>
                                <Text style={styles.footer}>
                                    : Position_Name{" "}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ display: "flex", alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 12,
                                margin: 12,
                                backgroundColor: "#F3A80E",
                                paddingVertical: 3,
                                paddingHorizontal: 20,
                                borderRadius: 20,
                                fontFamily: "ArimoItalic",
                            }}
                        >
                            https://rimaushipping.com/
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

Font.register({
    family: "Anton",
    src: "/font/Anton-Regular.ttf",
});
Font.register({
    family: "OpenSansItalic",
    src: "/font/OpenSans-Italic-VariableFont_wdth,wght.ttf",
});
Font.register({
    family: "OpenSans",
    src: "/font/OpenSans-VariableFont_wdth,wght.ttf",
});
Font.register({
    family: "ArimoItalic",
    src: "/font/Arimo-Italic-VariableFont_wght.ttf",
});
Font.register({
    family: "Arimo",
    src: "/font/Arimo-VariableFont_wght.ttf",
});

const styles = StyleSheet.create({
    body: {
        position: "relative",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Anton",
    },
    text: {
        width: "45%",
        color: "white",
        fontFamily: "OpenSans",
        fontSize: 11,
    },
    dash: {
        backgroundColor: "#F3A80E",
        height: 1,
        width: 40,
        borderRadius: 20,
    },
    subtitle: {
        fontFamily: "Arimo",
        fontSize: 15,
        backgroundColor: "#F3A80E",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 10,
    },
    dot: {
        color: "white",
        position: "absolute",
        top: -3,
        left: -10,
    },
    image: {
        marginHorizontal: "auto",
        borderRadius: 10,
        width: 500,
    },
    icon :{
        position: "absolute",
        left: "10px",
        top: "10px",
        height: "30px",
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    footer: {
        fontFamily: "Arimo",
        fontSize: 12,
    },
});