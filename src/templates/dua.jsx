import {
    Document,
    Page,
    Text,
    Image,
    Font,
    StyleSheet,
    View,
} from "@react-pdf/renderer";

export default function Dua(props) {
    const { title, responsibilities, requirements } = props;

    return (
        <Document title={"lokershipping-" + title}>
            <Page
                style={{
                    position: "relative",
                    padding: 50,
                    backgroundColor: "#FBFAF5",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        alignItems: "center",
                        top: 15,
                        left: 15,
                        gap: 2,
                    }}
                >
                    <Image src="/logo.png" style={styles.icon} />
                    <View style={{ display: "flex" }}>
                        <Text
                            style={{
                                fontFamily: "MonserratSemiBold",
                                fontSize: 10,
                            }}
                        >
                            RIMAU GROUP is owner company for coal mining,
                        </Text>
                        <Text
                            style={{
                                fontFamily: "MonserratSemiBold",
                                fontSize: 10,
                            }}
                        >
                            shipping, and trading company.
                        </Text>
                    </View>
                </View>

                <View style={{ paddingTop: 10, display: "flex", gap: 15 }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 50,
                                fontFamily: "MonserratBold",
                            }}
                        >
                            OPEN
                        </Text>
                        <Text
                            style={{
                                marginTop: -15,
                                fontSize: 50,
                                color: "#FFD600",
                                fontFamily: "MonserratBold",
                            }}
                        >
                            RECRUITMENT
                        </Text>
                        <View style={{marginBottom: 3}}>
                            <Text style={styles.desc}>
                                Shipping Rimau Group is a company engaged in
                                shipping services specializing in Tug Boats and
                                Barges.
                            </Text>
                            <Text style={styles.desc}>
                                We're provides transportation services for coal,
                                sand, broken stone, iron ore and nickel products in
                                all regions of Indonesia.
                            </Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    marginTop: 5,
                                    padding: 3,
                                    paddingHorizontal: 10,
                                    backgroundColor: "#FFD600",
                                    fontSize: 20,
                                    fontFamily: "MonserratSemiBold",
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 40,
                            }}
                        >
                            <View>
                                <Text style={styles.subtitle}>Requirement</Text>
                                <View style={{ display: "flex", gap: 3 }}>
                                    {requirements.map((req) => {
                                        return (
                                            <View
                                                key={req.id}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    paddingLeft: 10,
                                                }}
                                            >
                                                <Text style={styles.dot}>
                                                    •
                                                </Text>
                                                <Text style={styles.text}>
                                                    {req.value}
                                                </Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View>
                                <Text style={styles.subtitle}>
                                    Responsibility
                                </Text>
                                <View style={{ display: "flex", gap: 3 }}>
                                    {responsibilities.map((req) => {
                                        return (
                                            <View
                                                key={req.id}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    paddingLeft: 10,
                                                }}
                                            >
                                                <Text style={styles.dot}>
                                                    •
                                                </Text>
                                                <Text style={styles.text}>
                                                    {req.value}
                                                </Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <Image
                    src="/image.jpeg"
                    style={{ position: "absolute", bottom: 0, width: "100vw" }}
                />
                <View
                    style={{
                        backgroundColor: "#FFD600",
                        position: "absolute",
                        paddingVertical: 15,
                        bottom: 0,
                        width: "100vw",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "MonserratRegular",
                            textAlign: "center",
                            fontSize: 10,
                        }}
                    >
                        Email : hrd.rimaugroup@gmail.com &nbsp; | &nbsp; CC :
                        mariaanitas@rimaugroup.com &nbsp; | &nbsp; Subject :
                        Position_Name
                    </Text>
                </View>
            </Page>
        </Document>
    );
}

Font.register({
    family: "MonserratBlack",
    src: "/font/Montserrat-Black.ttf",
});
Font.register({
    family: "MonserratBold",
    src: "/font/Montserrat-Bold.ttf",
});
Font.register({
    family: "MonserratExtraBold",
    src: "/font/Montserrat-ExtraBold.ttf",
});
Font.register({
    family: "MonserratLight",
    src: "/font/Montserrat-Light.ttf",
});
Font.register({
    family: "MonserratMedium",
    src: "/font/Montserrat-Medium.ttf",
});
Font.register({
    family: "MonserratRegular",
    src: "/font/Montserrat-Regular.ttf",
});
Font.register({
    family: "MonserratSemiBold",
    src: "/font/Montserrat-SemiBold.ttf",
});

const styles = StyleSheet.create({
    text: {
        width: "45%",
        fontFamily: "MonserratSemiBold",
        fontSize: 9,
    },
    desc: {
        fontSize: 8,
        fontFamily: "MonserratRegular",
    },
    subtitle: {
        fontFamily: "MonserratBold",
        fontSize: 20,
        marginBottom: 10,
    },
    dot: {
        position: "absolute",
        top: -2,
        fontSize: 15,
        left: 0,
    },
    icon: {
        height: "30px",
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
});
