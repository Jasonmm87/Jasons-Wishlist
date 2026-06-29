const categoryGrids = {
  HighPriority: document.querySelector("#high-priority .wishlist-grid"),
  Figure: document.querySelector("#figures .wishlist-grid"),
  Manga: document.querySelector("#manga .wishlist-grid"),
  Game: document.querySelector("#games .wishlist-grid"),
  Clothes: document.querySelector("#clothes .wishlist-grid"),
  Other: document.querySelector("#other .wishlist-grid"),
};

const cards = [

    {
    id: "shigaraki-figure",
    title: "Shigaraki Figure (SHF)",
    image: "images/SHhigaraki.jpg",
    url: "https://www.amazon.com/TAMASHII-NATIONS-Academia-Shigaraki-S-H-Figuarts/dp/B0FT2DNKC3/ref=sims_dp_d_dex_ai_rank_model_1_d_v1_d_sccl_1_1/143-7520338-7568222?pd_rd_w=ktD4i&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=5MY8KTPW1ND47JZQP89Z&pd_rd_wg=WGOXQ&pd_rd_r=18cd365e-3be2-4e21-87b2-82762c8efd47&pd_rd_i=B0FT2DNKC3&th=1 ",
    series: "My Hero Academia",
    category: "Figure",
    price: "$90 - $100",
    priority: "High",
  },
   {
    id: "bakugo-figure",
    title: "Bakugo Figure (SHF)",
    image: "images/Baku.jpg",
    url: "https://www.amhttps://www.amazon.com/TAMASHII-NATIONS-Academia-Beginning-S-H-Figuarts/dp/B0FXJ2WJS5/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_1/143-7520338-7568222?pd_rd_w=IKdlB&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=DJ047XMAW6XQCP0PFWNB&pd_rd_wg=eEjZk&pd_rd_r=d2942e1c-936e-487e-9150-130a6c3c03ea&pd_rd_i=B0FXJ2WJS5&psc=1  azon.com/TAMASHII-NATIONS-Bakugo-S-H-Figuarts/dp/B0GYCV787C/ref=sr_1_1?crid=1VRNEADI2CDHQ&keywords=bakugo+shf",
    series: "My Hero Academia",
    category: "Figure",
    price: "$120",
    priority: "High",
  },
  
    {
    id: "denji-figure",
    title: "Denji Figure (SHF)",
    image: "images/Denji.jpg",
    url: "https://www.amazon.com/TAMASHII-NATIONS-Chainsaw-Reissue-S-H-Figuarts/dp/B0GYCV787C/ref=sr_1_1?crid=1VRNEADI2CDHQ&keywords=denji+shf",
    series: "Chainsaw Man",
    category: "Figure",
    price: "$70",
    priority: "High",
  },
  {
    id: "gojo-figure",
    title: "gojo Figure (SHF)",
    image: "images/gojo.jpg",
    url: "https://www.amazon.com/TAMASHII-NATIONS-Jujutsu-Reissue-S-H-Figuarts/dp/B0H38Q3LHD/ref=sr_1_7?dib=eyJ2IjoiMSJ9.A2OlNgSvUdPB8pgsbw0RePAsyYUi_o0gPBtN36ouueBxtQO8RpooLVi2AdCnu2_TjCbQveOt_LfjjSxEQ7aLlbm7qrV9zF2HgVh5F-4o0dYMfi5jNo5ZFb4JF4QrrP2ezD5rsiDwfQ5IYanvquifULNkNsK-EaOjslGhX_EyEM_oBjVP1hAfTVdUnYgZf1pt8aLLpLDH6PMmWMOrC_GWpXERS3xuNMtSCRsIZ75GfnHO6xw0dvCqtXqxPqEn-Xxo1MXhNIt8ZRgqIDZhdZUmmk4X1Semizzud7seColILFw.FpLM7ba115f0y606CdM1hM61GYowbJ3NndPb3ull7n8&dib_tag=se&keywords=jjk%2Bfigures&qid=1782751506&sr=8-7&th=1",
    series: "Jujutsu Kaisen",
    category: "Figure",
    price: "$70",
    priority: "Mid - High",
  },
  {
    id: "dabi-figure",
    title: "Dabi Figure (SHF)",
    image: "images/dabi.jpg",
    url: "https://us.amazon.com/TAMASHII-NATIONS-Academia-S-H-Figuarts-Action/dp/B0FDMFT7B1?th=1",
    series: "My Hero Academia",
    category: "Figure",
    price: "$80 - $100",
    priority: "Medium",
  },
  {
    id: "toga-figure",
    title: "Toga Figure (SHF)",
    image: "images/Toga.jpg",
    url: "https://us.amazon.com/TAMASHII-NATIONS-Academia-S-H-Figuarts-Action/dp/B0FRTXTRVN?th=1",
    series: "My Hero Academia",
    category: "Figure",
    price: "$90 - $100",
    priority: "Medium",
  },
  {
    id: "yuji-figure",
    title: "Yuji Figure (SHF)",
    image: "images/Yuji.jpg",
    url: "https://www.amazon.com/TAMASHII-NATIONS-Jujutsu-Potential-S-H-Figuarts/dp/B0H38PWZKR?ref_=ast_sto_dp&th=1",
    series: "Jujutsu Kaisen",
    category: "Figure",
    price: "$75",
    priority: "High",
  },
  {
    id: "Shoto Maximatic Figure",
    title: "Shoto Maximatic Figure (Banpresto)",
    image: "images/Shoto.jpg",
    url: "https://us.amazon.com/Banpresto-Academia-Todoroki-Maximatic-Figure/dp/B0G11WXN3Y/ref=sr_1_1?crid=3V0X9Z2Q6Y4G&keywords=shoto+maximatic&qid=1698480000&sprefix=shoto+maximatic%2Caps%2C82&sr=8-1",
    series: "My Hero Academia",
    category: "Figure",
    price: "$35",
    priceValue: 35,
    priority: "Low",
  },
  {
    id: "Denji-figure",
    title: "Denji Figure (Banpresto)",
    image: "images/denji banpres.jpg",
    url: "https://www.amazon.com/Banpresto-Chainsaw-Bandai-Spirits-Vibration/dp/B0D4YRLG2W/ref=dp_fod_d_sccl_3/143-7520338-7568222?pd_rd_w=PFV5y&content-id=amzn1.sym.7f84da73-eb85-4a58-91da-5292f6af7ef2&pf_rd_p=7f84da73-eb85-4a58-91da-5292f6af7ef2&pf_rd_r=0BFC1685A5F81B90TKF3&pd_rd_wg=OGIvZ&pd_rd_r=a226d4cf-4ce3-4039-af11-283045a72a59&pd_rd_i=B0D4YRLG2W&th=1",
    series: "Chainsaw Man",
    category: "Figure",
    price: "$49",
    priceValue: 49,
    priority: "Medium",
  },
  {
    id: "Chainsaw man-figure",
    title: "Chainsaw Man Figure (Shf)",
    image: "images/Chainsaw man sh.jpg",
    url: "https://www.amazohttps://www.amazon.com/TAMASHII-NATIONS-Chainsaw-S-H-Figuarts-Action/dp/B0F616VHBP/ref=sr_1_1?crid=1IP72OYQMB25Y&dib=eyJ2IjoiMSJ9.yPZWXUoG_FwpCMj_i7EF3WWa25RDOBvJ0l12cZeOj7ADjvV14P0vBcSKNiBChdfbCQHH2sMTzQYDWRfIl1jEEZP1hqmGHBCFBVEFNOJBP8YhM1HrJ-He37u5LdN2YijsTt7DeiXM-QnhxEjeHIteAiftvEFm5-hyyja0QTBWdmxCariIy7Y87OGgpxY6FjZr7HCPoubaJzDRwJ-NwTStU_9nGlsYz3MJX_ELkGdtL_FvopDmGkNDdFduG39BoSS0bu0K952QKwSOuY8I8m1ZOAIe9xuuKv2CIPEwwU289ZY.5PhOiVkqJ347TUbWt42X4ngvlFgTB1mn_-ARLCeL-t4&dib_tag=se&keywords=Shf%2Bchainsaw%2Bman&qid=1782754080&s=toys-and-games&sprefix=shf%2Bchainsaw%2Bman%2Ctoys-and-games%2C198&sr=1-1&th=1   n.com/Banpresto-Chainsaw-Bandai-Spirits-Vibration/dp/B0D4YRLG2W/ref=dp_fod_d_sccl_3/143-7520338-7568222?pd_rd_w=PFV5y&content-id=amzn1.sym.7f84da73-eb85-4a58-91da-5292f6af7ef2&pf_rd_p=7f84da73-eb85-4a58-91da-5292f6af7ef2&pf_rd_r=0BFC1685A5F81B90TKF3&pd_rd_wg=OGIvZ&pd_rd_r=a226d4cf-4ce3-4039-af11-283045a72a59&pd_rd_i=B0D4YRLG2W&th=1",
    series: "Chainsaw Man",
    category: "Figure",
    price: "$71",
    priceValue: 71,
    priority: "Medium",
  },
  
  {
    id: "carnage-deku-figure",
    title: "Carnage Deku Figure",
    image: "images/carnage deku.jpg",
    url: "  https://www.amazon.com/TAMASHII-NATIONS-Academia-Overlay-S-H-Figuarts/dp/B0G2N89HR7/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_5/143-7520338-7568222?pd_rd_w=Xg4Fp&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=0HVV8TF0S7PZTFHV5A2F&pd_rd_wg=lJm1I&pd_rd_r=70912f65-959c-4b5d-a7b3-df7e4dac5954&pd_rd_i=B0G2N89HR7&psc=1    ",
    series: "My Hero Academia",
    category: "Figure",
    price: "$100",
    priceValue: 100,
    priority: "Medium",
  },
  {
    id: "Funko Pop Mob",
    title: "Funko Pop Mob Psycho 100",
    image: "images/mobb.jpg",
    url: "https://www.amazon.chttps://www.amazon.com/Funko-Pop-Collectible-Toy-Figure/dp/B0G23LPWTX/ref=sr_1_3?crid=2MZVYWBZ6FYAH&dib=eyJ2IjoiMSJ9.WHlez7eR6eR6rSwXTkWaa3keSvNi1KSV094BdyOfAxrmZcWfx1I_3GEgUmlnRnNCT0Yr7PBPV2905RsXxLIUMTzwF1mAD2LGuPBFJMk86CN6ET0lX7FFJaMN0JsquJTDXXfWhKMn2_OSy9M_rhqV1p4bveLpY2PxOC3_eb2C0MNbduaM889MoXjiKVed8N2kgBTOIEkHUhyBd2dqOpjAyQGyR3RFImvx-oISM_0ET8zZk_aTLfs8FB4WNHYhZXptOqCdHWbVKVmzbz8hUeJjtslrg6AE_iaztpDxTrbEDgc.V2ysVtcMO4iAn3WMPzSEwYhUBh9Si6XhsaCbiLEmATY&dib_tag=se&keywords=mob+psycho+100&qid=1782755632&s=toys-and-games&sprefix=mob+psych%2Ctoys-and-games%2C192&sr=1-3   om/Funko-Pop-Mob-Psycho-100/dp/B08QZJZJZJ",
    series: "Mob Psycho 100",
    category: "Figure",
    price: "$15",
    priceValue: 15,
    priority: "Medium",
  },
  {
    id: "Funko Pop Reigen",
    title: "Funko Pop Reigen",
    image: "images/reige.jpg",
    url: "https://www.amazon.com/Funko-Pop-Collectible-Toy-Figure/dp/B0G236M2ZB/ref=sr_1_4?crid=2MZVYWBZ6FYAH&dib=eyJ2IjoiMSJ9.WHlez7eR6eR6rSwXTkWaa3keSvNi1KSV094BdyOfAxrmZcWfx1I_3GEgUmlnRnNCT0Yr7PBPV2905RsXxLIUMTzwF1mAD2LGuPBFJMk86CN6ET0lX7FFJaMN0JsquJTDXXfWhKMn2_OSy9M_rhqV1p4bveLpY2PxOC3_eb2C0MNbduaM889MoXjiKVed8N2kgBTOIEkHUhyBd2dqOpjAyQGyR3RFImvx-oISM_0ET8zZk_aTLfs8FB4WNHYhZXptOqCdHWbVKVmzbz8hUeJjtslrg6AE_iaztpDxTrbEDgc.V2ysVtcMO4iAn3WMPzSEwYhUBh9Si6XhsaCbiLEmATY&dib_tag=se&keywords=mob+psycho+100&qid=1782756336&s=toys-and-games&sprefix=mob+psych%2Ctoys-and-games%2C192&sr=1-4",
    series: "Mob Psycho 100",
    category: "Figure",
    price: "$15",
    priceValue: 15,
    priority: "Medium",
  },
  {
    id: "jjk-boxset",
    idText: "jujutsu kaisen boxset",
    title: "Jujutsu Kaisen Manga Boxset",
    image: "images/JJk.jpg",
    url: "https://www.amazon.com/Jujutsu-Kaisen-Complete-Box-Set/dp/1974769356/ref=sr_1_1?crid=3V0X9Z2Q6Y4G&keywords=jujutsu+kaisen+box+set&qid=1698480000&sprefix=jujutsu+kaisen+box+set%2Caps%2C82&sr=8-1",
    series: "Jujutsu Kaisen",
    category: "Manga",
    price: "$100 - $200",
    priority: "High",
  },
  {
    id: "evangelion-manga",
    idText: "evangelion manga",
    title: "Evangelion Manga",
    image: "images/evangelion,jpg.jpg",
    url: "https://www.amazon.com/Neon-Genesis-Evangelion-Manga-Set/dp/B09B4DWXLV/ref=sr_1_1?crid=165U59X7KFLNL",
    series: "Evangelion",
    category: "Manga",
    price: "$100",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-9",
    title: "Mob Psycho 100 Vol. 9",
    image: "images/Mob 9.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-9/dp/1632366517",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-10",
    title: "Mob Psycho 100 Vol. 10",
    image: "images/Mob 10.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-10/dp/1632366525",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-11",
    title: "Mob Psycho 100 Vol. 11",
    image: "images/Mob 11.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-11/dp/1682332447",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-12",
    title: "Mob Psycho 100 Vol. 12",
    image: "images/Mob 12.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-12/dp/1974720420",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-13",
    title: "Mob Psycho 100 Vol. 13",
    image: "images/Mob 13.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-13/dp/1682332463",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-14",
    title: "Mob Psycho 100 Vol. 14",
    image: "images/Mob 14.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-14/dp/1682332471",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-15",
    title: "Mob Psycho 100 Vol. 15",
    image: "images/Mob 15.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-15/dp/168233248X",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "mob-psycho-vol-16",
    title: "Mob Psycho 100 Vol. 16",
    image: "images/Mob 16.jpg",
    url: "https://www.amazon.com/Mob-Psycho-100-Vol-16/dp/1682332498",
    series: "Mob Psycho 100",
    category: "Manga",
    price: "$10",
    priority: "Medium",
  },
  {
    id: "my-hero-all-justice-game",
    idText: "my hero all justice game",
    title: "My Hero All Justice Game",
    image: "images/All justice.jpg",
    url: "https://store.steampowered.com/app/2362050/MY_HERO_ACADEMIA_Alls_Justice/",
    series: "My Hero Academia",
    category: "Game",
    price: "$59 - $99",
    priority: "Low",
  },
   {
    id: "Robux",
    idText: "robux",
    title: "Robux",
    image: "images/Robux.jpg",
    url: "https://www.amazon.com/Robux-Roblox-Online-Game-Code/dp/B07RX6FBFR/ref=sr_1_2?crid=G8K1F49UICR1&dib=eyJ2IjoiMSJ9.d9QbIyuJH59cku6OsMfGbQmsf8C2rI6D470Fy08MxnA635jgCFUdmcLlwb1s5IrvxK-8YgXe88U4in39q1FEILGgfGJ6dlrOZwuDHv_v7XWxUdYmlXqwioPBMNMWRpkPxpXh-LgRyZASVMpYYzli162fTRrPYW2gRQM8udsdvG8.QoFb2p5E7DACUIa19yqmYI3QaaPsi4ARMaULIKs2R34&dib_tag=se&keywords=robux&qid=1782755432&s=toys-and-games&sprefix=robu%2Ctoys-and-games%2C212&sr=1-2&th=1    ",
    series: "Roblox",
    category: "Game",
    price: "$20",
    priority: "Mid - High",
  },
  {
    id: "Devil May Cry 3",
    idText: "devil may cry 3",
    title: "Devil May Cry 3",
    image: "Images/Devil_May_Cry_3.jpg",
    url: "https://steamcommunity.com/app/65500/",
    series: "Devil May Cry",
    category: "Game",
    price: "$20",
    priority: "Low",
  },
  {
    id: "gildan-black-undershirts",
    title: "Gildan Black Undershirts Multipack",
    image: "Images/balk.jpg",
    url: "https://www.amazon.com/Gildan-Shirts-Multipack-Black-X-Large/dp/B07JBS438B/ref=sr_1_5?crid=2LJ9CC37QB7B8&dib=eyJ2IjoiMSJ9.-YMhTdpSUuXMi3fBprOWucy9SLsKCEy1DRg0GtPlkawahvckfJ4X4sBDWHC0web1kugwhjKOv_WvzTiiPJl9lUypxm7-2W4syHV8I7YS9P_C0EFiJjOocmQePFhIlVjd3P_qEnYR4rhW29Skm1-a0LjLS435-DqVYJi85FhgBn4--YBmEDhHuwS4tCOQ5KJWpFAs9XtA49ScDIfy2YlmPNnJs-AmBzWER2-LPpn2C2hkDa6pvW25LUq2nodBFDrRXz8rmzbdEei40EsEzy10Yx435FuMYy26c8J89vYkCQY.VtsYKHNOTnai9zHkhuHpvhiVinczBhgY8sIQ15rh1z0&dib_tag=se&keywords=black%2Bundershirts%2Bmen&qid=1782759123&sprefix=black%2Bundershirts%2Bmen%2Caps%2C252&sr=8-5&th=1&psc=1",
    series: "Gildan",
    category: "Clothes",
    price: "$18",
    priority: "High",
  },
  {
    id: "gildan-black-tshirts",
    title: "Gildan Black T-Shirt Multipack",
    image: "C:\\Users\\Jason\\Downloads\\Jasons' Wishlist-20260628T225352Z-3-001\\Jasons_ Wishlist\\Images\\blk tshirk.jpg",
    url: "https://www.amazon.com/Gildan-T-Shirt-Multipack-Black-Large/dp/B07JDFPQTC/ref=sr_1_5?crid=172Q07GACRC6L&dib=eyJ2IjoiMSJ9.hzNKccWrA4A9fLNy0pVPJhbV7doTJwDXyw7F5tznnwBau8R8YA9q1AYm1s4GeESRVTA1W_YP1hUyhvDNpIViRGNiEAmnCL4EylQUZ_QEk4GAL8rK5hR75po2-NjKNruxv2-Yco5zdOlj4r7xC9ricnRykwTsC7cPeeKyMT1R1hk4RcAYoZVqP7BmZbi3W6i0wzGn7EZiU7QZOp9aZKWL577MhCCZTZ6-w59h724V9nPsLyTFVyavaBxCXpPwloIJ62UAIf2F7L99cMkVjeX6aP3cI1dKMmhjgq7jSbRRsiU.N8Fr2N8ASizmFzHKdXuRe_mRRL9PfTmy84XYKcmupRg&dib_tag=se&keywords=plain%2Bblack%2Btshirt%2Bmen&qid=1782757500&sprefix=plain%2Bb%2Caps%2C218&sr=8-5&th=1&psc=1",
    series: "Gildan",
    category: "Clothes",
    price: "$20",
    priority: "High",
  },
  {
    id: "adidas-black-track-pants",
    title: "adidas Black Track Pants",
    image: "https://images.unsplash.com/photo-1595052114388-14fd93765bd0?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.com/adidas-3-Stripes-Tricot-Regular-Sportswear/dp/B0D22RGQQS/ref=sr_1_5?crid=69SZH24M2201&dib=eyJ2IjoiMSJ9.4MZfIutoonGVN1JEgb2vFKGGR_ACqHtEeZejxKTk7cR9316hYHIiFbTdqEAhdkzNRQGQl_GwVRDroKEh9jFuO7aLzeZxu1Ps_0sa0GFpkCtC-irhjbykAokbKb4hzQQTOyhLlnguK2kH677-XNXrrKcuEJVc7Ue6WurZfKhPatHHdy-bTF-ueJtIwPyl975v9LXSa5r1q__j-R0vfiRwyLJ19pPSbf_sGvxC3HSEeGKo4xP5hCLfgIyo_I43NR8tUNSwJv2eVXNnEE54yDU_rA6FhSF3XLJxPoZvERD5Vj4.0zb3Nh00SkhfsVDg8tJ92yxDLtgFca1mEtkmbPhkpvo&dib_tag=se&keywords=track%2Bpants&qid=1782757525&sprefix=track%2Bpant%2Caps%2C243&sr=8-5&th=1&psc=1",
    series: "adidas",
    category: "Clothes",
    price: "$40",
    priority: "Medium",
  },
  {
    id: "school-backpack",
    title: "School Backpack",
    image: "Images/skl bag.jpg",
    url: "https://www.amazon.com/School-Backpack-Student-Travel-Black/dp/B07V4R4Z77/ref=sr_1_16?crid=1J84O1D9FFOHJ&dib=eyJ2IjoiMSJ9.r2oZplauw0M-BQvXQRQtc2enJ-gTlT-CqANG3X_8Z6HR5jD72YE03xl2apqGVy-eRf-UnbR3jYGTo6xr1uAP-akv-GpL4FJJc1v8qWkks1YjcnE4itDFhxfH9c9cYkv_xaSAnld7112iCNlgxyV1eqIYnEaIaAWGFpoTXPAqgSDTlIv0vad1Dj48guHY3JzOLL80LN5xdQYwk9XWMUQG1vhUoWiUBFsUsZeAXdtmrls.BrJfDeyWzUEbJwt2jJeC2MWBFC9UHsQTANZ6PBP4ya4&dib_tag=se&keywords=black%2Bbackpack&qid=1782757552&sprefix=black%2Bbackpa%2Caps%2C231&sr=8-16&th=1",
    series: "School Supplies",
    category: "Clothes",
    price: "$45",
    priority: "Medium",
  },
  {
    id: "kootek-laptop-cooling-pad",
    title: "Kootek Laptop Cooling Pad",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.com/Kootek-Laptop-Cooling-Cooler-Adjustable/dp/B01469DJLM/ref=sr_1_3?dib=eyJ2IjoiMSJ9.e_fBVVbcVA_6EJKMsFz3DN61h9HGvf_qY8FsL_Twz8bS4UOYHlrXr0D81HLuC_d4vmVqkdBWNaatV2g3ZsjpoQeQQxvQXdufsSCkwNR7t6ZMXzem8FOP_SCrOD6qQoGdX_yCePfBIM7VcrSsy6fC8AQ-VBp-BGUJjKdo9X-AxRfXTs7zq2ttgSvFm_bdss8V3KPthsOarUPRXc5-hSHX6-jXOs8uCDFR_VtUIAbZb_U.UbT80aW4JqoEKkC-gwxRj-7mnqaUx34wpqrbNrG3jHo&dib_tag=se&keywords=laptop%2Bupgrades&qid=1782758225&sr=8-3&th=1",
    series: "Kootek",
    category: "Other",
    price: "$25",
    priority: "High",
  },
  {
    id: "evangelion-laptop-stickers",
    title: "Evangelion Laptop Sticker Set",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
    url: "https://www.amazon.com/Evangelion-Sticker-Character-Decals-Waterproof/dp/B0DSVG6VGQ/ref=sr_1_1?crid=30DKBF2XAI0WA&dib=eyJ2IjoiMSJ9.ThH8weUiUH_Zy_efywz3DDz9lpMfLoeJvPk198MXzPBPE_ydW6M5GLtrsXHj3FD2CxrXJUiaTzSQtM3xQBmIJfU7Mv9kZ6eeTqjjzNmrZlJZ-8dTp1-PLgbGtn1WgnR8vfdnQ8zl85PyePXg0Q8o12-mtCeU5iZ9JXZBWiUx9JIqIR-eZ5H7yl5S-z17Etpm3KVmobDW3bgZscVHygzh5CV_8U5NtTZ6Gm3cKuf8OYYbRes9b0T2_qqqEXorzMRRuhKS2eitUAwlb71JZyjMBi6COQI-P8qv6ud53rGApRc.J1HXlic8aVkdEgxUlqiI5NxET7TqgEPHD84PWLU-nJI&dib_tag=se&keywords=laptop+stickers+evangelion&qid=1782759777&sprefix=laptop+stickers+evangelio%2Caps%2C213&sr=8-1",
    series: "Evangelion",
    category: "Other",
    price: "$12",
    priority: "High",
  },
  {
    id: "demon-slayer-manga-collection",
    title: "Demon Slayer Manga Collection",
    image: "Images/demon slayer mamga.jpg",
    url: "https://www.amazon.com/Demon-Slayer-Kimetsu-Collection-Koyoharu/dp/B09KQJNLP2/ref=sr_1_40?crid=1327JKAPT4BG2&dib=eyJ2IjoiMSJ9.NsYpl3elQ9uHnN6oS07BVg1idSmuw4lptd3Y4hmSwvnF5JCeIDAaYuEPmDTpxntr6nS4GYSHqlR_Dm35OU8-Q3-CTng1Kz9cxs2EKBjUEiHpUC14fTR4KNc2b-OD-Nn4GOJbZ49Mu9hm8Ske9UDR_KXBDxaIsnTAlO-IF_z3xhUWxWC_aLzDS9GOYr1KgDzyheiS_mJCPDpOWFuu7pA-95OVFAic1YiDthyYcddkPwU3la8agxLzMuDoOmwwUXskHMrf_CfpZCi8m5jRs-Uvt6ZW8V1k_KEy2gf5bhB-pWk.g7FhKgYCchM30DS85BafRjaaoXnxGMfYesRBJznFjtI&dib_tag=se&keywords=demon+slayer+manga&qid=1782761927&sprefix=demon+%2Caps%2C221&sr=8-40",
    series: "Demon Slayer",
    category: "Manga",
    price: "$50",
    priority: "Low",
  },
];

function createCard(cardData) {
  const article = document.createElement("article");
  article.className = "wishlist-card";
  article.id = cardData.id || cardData.idText || cardData.title;
  article.setAttribute("data-id", cardData.id || article.id);

  article.innerHTML = `
    <h3>${cardData.title}</h3>
    <div class="item-info">
      <a href="${cardData.url}" target="_blank" rel="noopener noreferrer">
        <img src="${cardData.image}" alt="${cardData.title}">
      </a>
      <p>Series: ${cardData.series}</p>
      <p>Category: ${cardData.category}</p>
      <p>Price: ${cardData.price}</p>
      <p>Priority: <span>${cardData.priority}</span></p>
      <p>Reserved by: <span class="reserved-by">Not reserved yet</span></p>
      <p>Status: <span class="item-status">Wishlist</span></p>
    </div>

    <label>Your name:</label>
    <input class="reserver-name" type="text" placeholder="Enter your name">
    <label>
      <input class="anonymous-check" type="checkbox">
      Reserve anonymously
    </label>

    <button class="reserve-btn" type="button">Reserve Gift</button>
    <button class="unreserve-btn" type="button" style="display: none;">Unreserve</button>
  `;

  const reserveBtn = article.querySelector(".reserve-btn");
  const unreserveBtn = article.querySelector(".unreserve-btn");
  const nameInput = article.querySelector(".reserver-name");
  const anonymousCheck = article.querySelector(".anonymous-check");
  const reservedBy = article.querySelector(".reserved-by");
  const itemStatus = article.querySelector(".item-status");
  const savedReservation = localStorage.getItem(article.dataset.id);

  if (savedReservation) {
    const reservationData = JSON.parse(savedReservation);
    reservedBy.textContent = reservationData.reservedBy || "Not reserved yet";
    itemStatus.textContent = reservationData.status || "Wishlist";
    reserveBtn.textContent = "Reserved";
    reserveBtn.disabled = true;
    reserveBtn.style.display = "none";
    unreserveBtn.style.display = "inline-block";
  }

  reserveBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (anonymousCheck.checked) {
      reservedBy.textContent = "Anonymous";
    } else if (name === "") {
      alert("Enter your name or choose anonymous.");
      return;
    } else {
      reservedBy.textContent = name;
    }

    itemStatus.textContent = "Reserved";
    reserveBtn.textContent = "Reserved";
    reserveBtn.disabled = true;
    reserveBtn.style.display = "none";
    unreserveBtn.style.display = "inline-block";

    const cardId = article.dataset.id;
    const reservationData = {
      reservedBy: reservedBy.textContent,
      status: itemStatus.textContent,
    };

    localStorage.setItem(cardId, JSON.stringify(reservationData));
  });

  unreserveBtn.addEventListener("click", function () {
    reservedBy.textContent = "Not reserved yet";
    itemStatus.textContent = "Wishlist";
    reserveBtn.textContent = "Reserve Gift";
    reserveBtn.disabled = false;
    reserveBtn.style.display = "inline-block";
    unreserveBtn.style.display = "none";
    localStorage.removeItem(article.dataset.id);
  });

  return article;
}

function createPriorityCard(cardData) {
  const article = document.createElement("article");
  article.className = "wishlist-card high-priority-card";

  article.innerHTML = `
    <h3>${cardData.title}</h3>
    <div class="item-info">
      <a href="${cardData.url}" target="_blank" rel="noopener noreferrer">
        <img src="${cardData.image}" alt="${cardData.title}">
      </a>
      <p>Series: ${cardData.series}</p>
      <p>Category: ${cardData.category}</p>
      <p>Price: ${cardData.price}</p>
      <p>Priority: <span>${cardData.priority}</span></p>
    </div>
  `;

  return article;
}

function addCardToCategory(card) {
  const grid = categoryGrids[card.category] || categoryGrids.Other;
  if (!grid) {
    return;
  }
  grid.appendChild(createCard(card));
}

function addHighPriorityCard(card) {
  if (!card.priority || !card.priority.toLowerCase().includes("high")) {
    return;
  }

  const grid = categoryGrids.HighPriority;
  if (!grid) {
    return;
  }

  grid.appendChild(createPriorityCard(card));
}

cards.forEach(function (card) {
  addCardToCategory(card);
  addHighPriorityCard(card);
});

const picklesInput = document.getElementById("pickles-input");
const picklesBtn = document.getElementById("pickles-btn");
const picklesChat = document.querySelector(".pickles-chat");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("pickles-message", sender);
  msg.textContent = text;
  picklesChat.appendChild(msg);
  picklesChat.scrollTop = picklesChat.scrollHeight;
}

function getPicklesReply(question) {
  const text = question.toLowerCase();

  let results = cards;

  if (text.includes("manga")) {
    results = results.filter(function (card) {
      return card.category.toLowerCase() === "manga";
    });
  }

  if (text.includes("figure") || text.includes("figures")) {
    results = results.filter(function (card) {
      return card.category.toLowerCase() === "figure";
    });
  }

  if (text.includes("game") || text.includes("games")) {
    results = results.filter(function (card) {
      return card.category.toLowerCase() === "game";
    });
  }

  if (text.includes("clothes") || text.includes("clothing")) {
    results = results.filter(function (card) {
      return card.category.toLowerCase() === "clothes";
    });
  }

  if (text.includes("high priority")) {
    results = results.filter(function (card) {
      return card.priority.toLowerCase() === "high";
    });
  }

  if (text.includes("under") || text.includes("below")) {
    const numberMatch = text.match(/\d+/);

    if (numberMatch) {
      const budget = Number(numberMatch[0]);

      results = results.filter(function (card) {
        return card.priceValue <= budget;
      });
    }
  }

  if (text.includes("chainsaw")) {
    results = results.filter(function (card) {
      return card.series.toLowerCase().includes("chainsaw");
    });
  }

  if (text.includes("jujutsu") || text.includes("jjk")) {
    results = results.filter(function (card) {
      return card.series.toLowerCase().includes("jujutsu");
    });
  }

  if (text.includes("hi amaru")) {
    return "hi amaru";
  }

  if (text.includes("hi kial")) {
    return "hi kial";
  }

  if (results.length === 0) {
    return "I could not find anything that matches that request. Try asking for a category, series, budget, or priority.";
  }

  const itemNames = results.map(function (card) {
    return card.title;
  });

  const bestItem = results.find(function (card) {
    return card.priority.toLowerCase() === "high";
  }) || results[0];

  return "I found " + results.length + " matching item(s): " + itemNames.join(", ") +
         ". A good choice might be " + bestItem.title +
         " because it is marked as " + bestItem.priority + " priority.";
}

picklesBtn.addEventListener("click", function () {
  const userText = picklesInput.value.trim();

  if (userText === "") return;

  addMessage(userText, "user");

  const reply = getPicklesReply(userText);
  addMessage(reply, "bot");

  picklesInput.value = "";
});
