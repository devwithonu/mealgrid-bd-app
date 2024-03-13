import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import {
  add_outline_icon,
  clock_icon,
  fire_icon,
  star_outline_icon,
} from "../assets/index.icon";
import { FormSubmitButton } from "../components/button/FormSubmitButton";

/**
 * @author
 * @function Shop
 **/
export const Shop = ({ shop_data }) => {
  //   console.log("shop_data: ", shop_data);

  return (
    <View style={{ paddingVertical: 12 }}>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: MealGridColors.bg_all_purpose,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Image
            source={{ uri: shop_data?.logo }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: MealGridColors.bg_all_purpose,
            }}
          />
          <BoldText style={{ fontSize: 20, maxWidth: "60%" }}>
            {shop_data?.shop_name}
          </BoldText>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <RegularText
            style={{
              fontSize: 12,
              color: MealGridColors.gray_ignored,
              maxWidth: "80%",
              paddingLeft: 30,
            }}
          >
            Top Restrurent | 1.2 km Away | Tk 34 Delivery | {shop_data?.address}
          </RegularText>
          <TouchableOpacity style={{ padding: 2 }}>
            <BoldText style={{ fontSize: 13, color: MealGridColors.primary }}>
              More info
            </BoldText>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              maxWidth: "80%",
            }}
          >
            <Image
              source={star_outline_icon}
              style={{
                height: 24,
                width: 24,
                tintColor: MealGridColors.primary,
              }}
            />
            <BoldText style={{ fontSize: 14 }}>{shop_data?.rating}</BoldText>
            <RegularText
              style={{ fontSize: 12, color: MealGridColors.gray_ignored }}
            >
              {" ("}121+ reviews{")"}
            </RegularText>
          </View>
          <TouchableOpacity style={{ padding: 4 }}>
            <BoldText style={{ fontSize: 13, color: MealGridColors.primary }}>
              See Reviews
            </BoldText>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <Image
              source={clock_icon}
              style={{
                height: 24,
                width: 24,
                tintColor: MealGridColors.primary,
              }}
            />
            <BoldText style={{ fontSize: 14 }}>
              Delivery: Launch: {shop_data?.delivery?.launch}
              {" | Diner: "}
              {shop_data?.delivery?.dinner}
            </BoldText>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 12,
          //   borderBottomWidth: 1,
          //   borderBottomColor: MealGridColors.bg_all_purpose,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginBottom: 12,
          }}
        >
          <Image
            source={fire_icon}
            style={{
              height: 24,
              width: 24,
              tintColor: MealGridColors.primary,
            }}
          />
          <View>
            <BoldText style={{ fontSize: 24 }}>Popular</BoldText>
            <RegularText
              style={{
                fontSize: 12,
                color: MealGridColors.gray_ignored,
              }}
            >
              Most ordered package right now
            </RegularText>
          </View>
        </View>

        {shop_data?.package?.map((pkg, ind) => {
          return <PackageView pkg={pkg} key={ind} />;
        })}
      </View>
    </View>
  );
};

const PackageView = ({ pkg }) => {
  const [isDetailView, setDetailView] = useState(false);
  return (
    <View
      style={{
        backgroundColor: MealGridColors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 8,
        marginBottom: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "84%" }}>
          <SemiBoldText style={{ fontSize: 18, marginBottom: 4 }}>
            {pkg?.package_name}
          </SemiBoldText>
          <RegularText
            style={{
              fontSize: 12,
              color: MealGridColors.gray_ignored,
              marginBottom: 6,
            }}
          >
            Avarage Launch Price: Tk {pkg?.avarage_launch_price} | Avarage
            Dinner Price: Tk {pkg?.avarage_dinner_price}
          </RegularText>
          <TouchableOpacity
            style={{ paddingVertical: 6 }}
            onPress={() => setDetailView(!isDetailView)}
          >
            <SemiBoldText
              style={{ fontSize: 13, color: MealGridColors.primary }}
            >
              {isDetailView ? "Minimize" : "See Details"}
            </SemiBoldText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            width: "16%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          onPress={() => {}}
        >
          <Image
            source={add_outline_icon}
            style={{
              height: 24,
              width: 24,
              tintColor: MealGridColors.primary,
            }}
          />
        </TouchableOpacity>
      </View>
      {isDetailView && (
        <View style={{ marginTop: 10 }}>
          {pkg?.menu?.map((menu, ind) => {
            return (
              <View key={ind} style={{ marginVertical: 4 }}>
                <BoldText style={{ fontSize: 14, marginBottom: 8 }}>
                  {menu?.day_name}
                </BoldText>

                <View
                  style={{
                    marginBottom: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "75%" }}>
                    <RegularText
                      style={{
                        fontSize: 12,
                        color: MealGridColors.gray_ignored,
                      }}
                    >
                      Launch Menu: {menu?.launch?.food}
                    </RegularText>
                    <RegularText
                      style={{
                        fontSize: 12,
                        color: MealGridColors.gray_ignored,
                      }}
                    >
                      Tk {menu?.launch?.price}
                    </RegularText>
                  </View>

                  <Image
                    source={{ uri: menu?.launch?.cover_img }}
                    style={{
                      height: 48,
                      width: 48,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: MealGridColors.offWhite_2,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginBottom: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "75%" }}>
                    <RegularText
                      style={{
                        fontSize: 12,
                        color: MealGridColors.gray_ignored,
                      }}
                    >
                      Dinner Menu: {menu?.dinner?.food}
                    </RegularText>
                    <RegularText
                      style={{
                        fontSize: 12,
                        color: MealGridColors.gray_ignored,
                      }}
                    >
                      Tk {menu?.dinner?.price}
                    </RegularText>
                  </View>

                  <Image
                    source={{ uri: menu?.dinner?.cover_img }}
                    style={{
                      height: 48,
                      width: 48,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: MealGridColors.offWhite_2,
                    }}
                  />
                </View>
              </View>
            );
          })}
          <FormSubmitButton
            onPress={null}
            btnText={"Go to plannig"}
            style={{
              marginTop: 12,
              backgroundColor: MealGridColors.white,
              borderWidth: 1,
              borderColor: MealGridColors.primary,
            }}
            btnTextStyle={{ fontSize: 14, color: MealGridColors.primary }}
          />
        </View>
      )}
    </View>
  );
};
