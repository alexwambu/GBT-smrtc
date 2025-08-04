require("dotenv").config();
const express = require("express");
const hre = require("hardhat");

const app = express();
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const { priceFeed } = req.body;

  if (!priceFeed) {
    return res.status(400).json({ error: "Missing priceFeed" });
  }

  try {
    const GBT = await hre.ethers.getContractFactory("GoldBarTether");
    const contract = await GBT.deploy(priceFeed);
    await contract.deployed();

    res.json({ success: true, contractAddress: contract.address });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: "Deployment failed" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
