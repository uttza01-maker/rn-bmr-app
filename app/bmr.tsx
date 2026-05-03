//rnfs
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Bmr() {
  return (
    <ScrollView style={styles.container}>
      {/* ส่วนของ Header แสดงรูปและชื่อแอปฯ */}
      <View style={styles.headerBmr}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/13767450/pexels-photo-13767450.jpeg",
          }}
          style={styles.imglogo}
        />
        <Text style={styles.headerTitle}>BMR Calculator</Text>
        <Text style={styles.headerSubTitle}>
          อัตราการเผาผลาญพลักงานพื้นฐานที่ร่างกายต้องการ
        </Text>
      </View>

      {/* ส่วนของการเลือกเพศ */}
      <View style={styles.genderBox}>
        <Text style={styles.genderTitle}>เพศ (Gender)</Text>
        <View style={styles.genderSelect}>
          <TouchableOpacity style={styles.btGender}>
            <Image
              source={require("@/assets/images/male.png")}
              style={styles.imgGender}
            />
            <Text>ชาย</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btGender}>
            <Image
              source={require("@/assets/images/female.png")}
              style={styles.imgGender}
            />
            <Text>หญิง</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ส่วนของการป้อนน้ำหนัก และส่วนสูง */}
      <View style={styles.whBox}>
        {/* ข้อความป้อนน้ำหนัก ส่วนสูง */}
        <View style={styles.whTitle}>
          <Text style={styles.txtWh}>น้ำหนัก (kg)</Text>
          <Text style={styles.txtWh}>ส่วนสูง (cm)</Text>
        </View>
        {/* ช่องป้อนน้ำหนัก ส่วนสูง */}
        <View style={styles.whInput}>
          <TextInput
            style={styles.tinputWh}
            keyboardType="numeric"
            placeholder="เช่น 89.45 ..."
          />
          <TextInput
            style={styles.tinputWh}
            keyboardType="numeric"
            placeholder="เช่น 168.12 ..."
          />
        </View>
      </View>

      {/* ส่วนของการป้อนอายุ */}
      <View style={styles.ageBox}>
        <Text style={styles.ageTitle}>อายุ (ปี)</Text>
        <TextInput
          style={styles.tinputAge}
          keyboardType="numeric"
          placeholder="เช่น 35 ..."
        />
      </View>

      {/* ส่วนของปุ่มคํานวณ */}
      <TouchableOpacity style={styles.btBmr}>
        <Text style={styles.txtBtBmr}>คํานวณ</Text>
      </TouchableOpacity>

      {/* ส่วนของการแสดงผล BMR */}
      <View style={styles.resultBox}>
        <Text style={styles.resultTitle1}>BMR ของคุณคือ</Text>
        <Text style={styles.resultTitle2}>0</Text>
        <Text style={styles.resultTitle3}>แคลอรี่ / วัน</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultTitle1: { fontFamily: "Kanit_700Bold" },
  resultTitle2: { fontFamily: "Kanit_700Bold", fontSize: 40, color: "#ed175e" },
  resultTitle3: { fontFamily: "Kanit_400Regular", color: "#6c6c6c" },
  resultBox: {
    marginVertical: 15,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 25,
    shadowColor: "#5b5b5b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btBmr: {
    backgroundColor: "#ed175e",
    marginHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  txtBtBmr: {
    color: "#ffffff",
    fontFamily: "Kanit_700Bold",
  },
  tinputAge: {
    borderWidth: 1,
    borderColor: "#d4d4d4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  ageTitle: {
    fontFamily: "Kanit_700Bold",
  },
  ageBox: {
    marginVertical: 15, //ห่างบนล่าง
    marginHorizontal: 25, //ห่างซ้ายขวา
  },
  whInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinputWh: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  txtWh: {
    width: "48%",
    fontFamily: "Kanit_700Bold",
  },
  whTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whBox: {
    marginVertical: 5, //ห่างบนล่าง
    marginHorizontal: 25, //ห่างซ้ายขวา
  },
  btGender: {
    width: "48%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    padding: 15,
    borderRadius: 10,
  },
  imgGender: {
    width: 25,
    height: 25,
  },
  genderSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderTitle: {
    fontFamily: "Kanit_700Bold",
  },
  genderBox: {
    marginVertical: 20, //ห่างบนล่าง
    marginHorizontal: 25, //ห่างซ้ายขวา
  },
  headerSubTitle: {
    fontFamily: "Kanit_400Regular",
    position: "absolute", //ให้วางตำแหน่งเป็นอิสระ
    bottom: 20, //ให้วางตำแหน่งห่างจากด้านล่าง
    left: 20, //ให้วางตำแหน่งห่างจากด้านซ้าย
    color: "#e3e1e1",
  },
  headerTitle: {
    fontFamily: "Kanit_700Bold",
    position: "absolute",
    bottom: 40,
    left: 20,
    fontSize: 28,
    color: "#e3e1e1",
  },
  imglogo: {
    width: "100%",
    height: "100%",
  },
  headerBmr: {
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#e3e1e1",
  },
});
