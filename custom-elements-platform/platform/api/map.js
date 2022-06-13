
const { success } = require("./helpers.js");


module.exports = {
    "v1/customer/assets/countries": {
        get() {
            return success({
                countries: [
                    { dialCode: "+372", value: "AM", text: "Armenia" },
                    { dialCode: "+673", value: "BN", text: "Brunei Darussalam" },
                    { dialCode: "+501", value: "BZ", text: "Belize" },
                    { dialCode: "+225", value: "CI", text: "Cook Inslands" },
                    { dialCode: "+20", value: "EG", text: "Egypt" },
                    { dialCode: "+1473", value: "GD", text: "Grenada" },
                    { dialCode: "+594", value: "GF", text: "French Guiana" },
                    { dialCode: "+504", value: "HN", text: "Honduras" },
                    { dialCode: "+1876", value: "JM", text: "Jamaika" },
                    { dialCode: "+371", value: "LV", text: "Latvia" },
                    { dialCode: "+1670", value: "MP", text: "Northern Mariana Islands" },
                    { dialCode: "+265", value: "MW", text: "Malawi" },
                    { dialCode: "+52", value: "MX", text: "Mexico" },
                    { dialCode: "+674", value: "NR", text: "Nauru" },
                    { dialCode: "+48", value: "PL", text: "Poland" },
                    { dialCode: "+508", value: "PM", text: "Saint Pierre and Miquelon" },
                    { dialCode: "+421", value: "SK", text: "Slovakia" },
                    { dialCode: "+268", value: "SZ", text: "Swaziland" },
                    { dialCode: "+235", value: "TD", text: "Chad" },
                    { dialCode: "+1868", value: "TT", text: "Trinidad and Tobago" },
                    { dialCode: "+1", value: "UM", text: "United States Minor Outlying Islands" },
                    { dialCode: "+27", value: "ZW", text: "Zimbabwe" },
                    { dialCode: "+1", value: "US", text: "United States of America" }]
            });
        }
    },
    "v1/customer": {
        get() {
            return success({
                identity: { firstName: "Yennefer", lastName: "Vengerberg" },
                transactions: [
                    { date: "29/04/2022", amount: -200, description: "witchcraft equipment" },
                    { date: "04/04/2022", amount: 6500, description: "paid for 12 potions" },
                    { date: "25/03/2022", amount: -950.45, description: "customs fee" },
                    { date: "12/03/2022", amount: 1400, description: "paid for extraction" },
                ],
                connections: [
                    { type: "person", name: "Geralt of Rivia" },
                    { type: "person", name: "Triss Merigold" },
                    { type: "place", name: "Bank of Vizima" }
                ],
                offers: [
                    { date: "05/07/2022", name: "No Customs Fee", description: "When your account reaches $20,000, we will cover all your customs fees" },
                    { date: "19/10/2022", name: "Annual Carnaval", description: "Come celebrate with us and bring your friends. You'll receive 15% off transactions fee for each new member you sign-up with us" }
                ]
            });
        }
    },
    "v1/customer/identity": {
        post() {
            return success();
        }
    },
    "v1/phone/verify": {
        //send code
        get() {
            return success();
        },
        //verify code
        post() {
            return success();
        }
    },
    "v1/customer/connections": {
        post() {
            return success();
        }
    }
};