// const { usermodal} = require("../Models/user.models")
const axios = require("axios")
const env = require("dotenv")
env.config()
const userwelcome = (req, res) => {
    res.send('welcome here my user')
    console.log('welcome page');
}

// const = (req, res) => {
//     res.send('welcome here my userDatails')
//     console.log('welcome page Details');
//     console.log(req.body);
// }

const userDetails = async (req, res) => {
    try {
        const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${req.body.AccountNumber}&bank_code=${req.body.Bankcode}&currency=NGN`, {
            headers: {  
                Authorization: `Bearer ${process.env.API_SECRET}`
            }
        });

        // console.log(response.data);
        // console.log("Api", process.env.API_SECRET);
                

        if (response.status !== 200) {
            console.log("Failed to validate account");
            return res.status(response.status).json({ status: false, message: "Failed to validate account" });

        }
        else {

            const accountName = response.data.data.account_name;
            // const accountNumber = req.body.AccountNumber;
            // const bankCode = req.body.Bankcode;
            console.log(accountName);
            res.status(200).json({ status: true, message: "Correct Account", accountName });
        }
    } catch (err) {
        console.error("Error occurred", err.message);
        console.log(err.url);
        
        res.status(500).json({ status: false, error: err.message || "Internal Server Error" });
    }
};





module.exports = { userwelcome, userDetails }