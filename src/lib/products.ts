import p1 from "@/assets/product-01.jpg";
import p2 from "@/assets/product-02.jpg";
import p3 from "@/assets/product-03.jpg";
import p4 from "@/assets/product-04.jpg";
import p5 from "@/assets/product-05.jpg";
import p6 from "@/assets/product-06.jpg";
import p7 from "@/assets/product-07.jpg";
import p8 from "@/assets/product-08.jpg";
import p9 from "@/assets/product-09.jpg";
import gabi1 from "@/assets/gabi-01.jpg";
import gabi2 from "@/assets/gabi-02.jpg";
import gabi3 from "@/assets/gabi-03.jpg";
import gabi4 from "@/assets/gabi-04.jpg";
import gabi5 from "@/assets/gabi-05.jpg";
import shopCrossSet from "@/assets/shop-cross-set.jpg";
import shopGabi6 from "@/assets/shop-gabi-06.jpg";
import shopGabi7 from "@/assets/shop-gabi-07.jpg";
import shopGabi8 from "@/assets/shop-gabi-08.jpg";
import shopGabi9 from "@/assets/shop-gabi-09.jpg";
import shopGabi10 from "@/assets/shop-gabi-10.jpg";
import shopRussianIcons from "@/assets/shop-russian-icons.jpg";
import shopProcessionalCross from "@/assets/shop-processional-cross.jpg";
import shopSaintSet from "@/assets/shop-saint-set.jpg";
import shopRobe from "@/assets/shop-robe.jpg";
import vestCapeCream from "@/assets/vestment-cape-cream.jpg";
import vestCapeWhite from "@/assets/vestment-cape-white.jpg";
import vestCapeGoldClasp from "@/assets/vestment-cape-gold-clasp.jpg";
import netelaBlueTibeb from "@/assets/netela-blue-tibeb.jpg";
import vestSilverCross from "@/assets/vestment-silver-cross.jpg";
import vestFurCape from "@/assets/vestment-fur-cape.jpg";
import vestGoldEmb from "@/assets/vestment-gold-embroidered.jpg";
import vestBlackEmb from "@/assets/vestment-black-embroidered.jpg";
import vestBridalGown from "@/assets/vestment-bridal-gown.jpg";
import giftSetAbuqelemsis from "@/assets/gift-set-abuqelemsis.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "item-01",
    name: "የእመቤታችን ሥእል — Theotokos Scroll",
    category: "የራሺያ ሥእሎች",
    price: 1500,
    stock: 10,
    image: p1,
    description: "መንፈሳዊ ሥዕል — handcrafted spiritual scroll icon.",
  },
  {
    id: "item-02",
    name: "የመድኃኔዓለም ሥእል — Christ Pantocrator",
    category: "የራሺያ ሥእሎች",
    price: 1400,
    stock: 10,
    image: p2,
    description: "መንፈሳዊ ሥዕል — handcrafted spiritual scroll icon.",
  },
  {
    id: "item-03",
    name: "የቅዱስ ጊዮርጊስ ሥእል — St. George Icon",
    category: "የራሺያ ሥእሎች",
    price: 1600,
    stock: 8,
    image: p3,
    description: "መንፈሳዊ ሥዕል — handcrafted spiritual scroll icon.",
  },
  {
    id: "item-04",
    name: "የእንጨት መስቀል — Wooden Hand Cross",
    category: "Crosses",
    price: 900,
    stock: 12,
    image: p4,
    description: "ባህላዊ መስቀል — traditional wooden cross.",
  },
  {
    id: "item-05",
    name: "የብረት መስቀል — Standing Crucifix",
    category: "Crosses",
    price: 2200,
    stock: 6,
    image: p5,
    description: "ባለ ቅርጽ መስቀል — ornate standing crucifix.",
  },
  {
    id: "item-06",
    name: "የእንጨት መጽሐፍ ቅዱስ — Engraved Bible Set",
    category: "Books",
    price: 2500,
    stock: 5,
    image: p6,
    description: "መጽሐፍ ቅዱስ — engraved wooden bible set.",
  },
  {
    id: "item-07",
    name: "ወንጌል ቅዱስ — Holy Gospel",
    category: "Books",
    price: 2300,
    stock: 5,
    image: p7,
    description: "መጽሐፍ ቅዱስ — engraved wooden bible.",
  },
  {
    id: "item-08",
    name: "ድጓ መጽሐፍ — Deggua Hymn Book",
    category: "Books",
    price: 2400,
    stock: 5,
    image: p8,
    description: "መጽሐፍ ቅዱስ — engraved wooden bible.",
  },
  {
    id: "item-09",
    name: "የበዓል ሥጦታ — Festival Gift Bundle",
    category: "Gift Sets",
    price: 3500,
    stock: 4,
    image: p9,
    description: "የበዓል ሥጦታ — curated gift set with bag.",
  },
  {
    id: "item-10",
    name: "የጥምቀት ሥጦታ — Timket Gift Box",
    category: "Gift Sets",
    price: 3200,
    stock: 4,
    image: p6,
    description: "የበዓል ሥጦታ — curated gift set.",
  },
  {
    id: "gabi-01",
    name: "ጋቢ ነጠላ — Tibeb Multicolor",
    category: "Gabi Netela",
    price: 3200,
    stock: 5,
    image: gabi1,
    description: "ጋቢ ነጠላ — handwoven cotton netela with vibrant multicolor tibeb border.",
  },
  {
    id: "gabi-02",
    name: "ጋቢ ነጠላ — White Tibeb",
    category: "Gabi Netela",
    price: 2900,
    stock: 5,
    image: gabi2,
    description: "ጋቢ ነጠላ — pure white handwoven netela with delicate white tibeb pattern.",
  },
  {
    id: "gabi-03",
    name: "ጋቢ ነጠላ — Gold Cross",
    category: "Gabi Netela",
    price: 3400,
    stock: 4,
    image: gabi3,
    description: "ጋቢ ነጠላ — white netela with gold embroidered cross motif border.",
  },
  {
    id: "gabi-04",
    name: "ጋቢ ነጠላ — Rainbow Tibeb",
    category: "Gabi Netela",
    price: 3300,
    stock: 4,
    image: gabi4,
    description: "ጋቢ ነጠላ — handwoven netela with rainbow tibeb diamond pattern.",
  },
  {
    id: "gabi-05",
    name: "ጋቢ ነጠላ — Green Border",
    category: "Gabi Netela",
    price: 2800,
    stock: 6,
    image: gabi5,
    description: "ጋቢ ነጠላ — soft white netela with bright green tibeb border.",
  },
  {
    id: "gabi-06",
    name: "ጋቢ ነጠላ — Pink Tibeb Box",
    category: "Gabi Netela",
    price: 3000,
    stock: 5,
    image: shopGabi6,
    description: "ጋቢ ነጠላ — handwoven white netela with pink tibeb border, gift-boxed.",
  },
  {
    id: "gabi-07",
    name: "ጋቢ ነጠላ — Rose Diamond",
    category: "Gabi Netela",
    price: 3100,
    stock: 5,
    image: shopGabi7,
    description: "ጋቢ ነጠላ — soft white netela with rose diamond tibeb edge.",
  },
  {
    id: "gabi-08",
    name: "ጋቢ ነጠላ — Lime Tibeb",
    category: "Gabi Netela",
    price: 3000,
    stock: 5,
    image: shopGabi8,
    description: "ጋቢ ነጠላ — white netela with vibrant lime green tibeb border.",
  },
  {
    id: "gabi-09",
    name: "ጋቢ ነጠላ — Ethiopian Flag",
    category: "Gabi Netela",
    price: 3500,
    stock: 4,
    image: shopGabi9,
    description: "ጋቢ ነጠላ — handwoven netela with green, yellow and red tibeb stripe.",
  },
  {
    id: "gabi-10",
    name: "ጋቢ ነጠላ — Royal Tilet",
    category: "Gabi Netela",
    price: 3600,
    stock: 3,
    image: shopGabi10,
    description: "ጋቢ ነጠላ — premium netela with rich tilet chevron pattern.",
  },
  {
    id: "gabi-11",
    name: "ጋቢ ነጠላ — Blue Diamond Tibeb",
    category: "Gabi Netela",
    price: 2950,
    stock: 6,
    image: netelaBlueTibeb,
    description: "ጋቢ ነጠላ — handwoven netela with deep blue diamond tibeb border.",
  },
  {
    id: "cross-set-01",
    name: "የመስቀል ስብስብ — Crucifix Gift Set",
    category: "Crosses",
    price: 4500,
    stock: 6,
    image: shopCrossSet,
    description: "የመስቀል ስብስብ — boxed crucifix with gold-tone censer base.",
  },
  {
    id: "cross-proc-01",
    name: "የእጅ መስቀል — Processional Cross",
    category: "Crosses",
    price: 8500,
    stock: 2,
    image: shopProcessionalCross,
    description: "የእጅ መስቀል — large gold-tone Ethiopian processional cross.",
  },
  {
    id: "icon-russian-01",
    name: "የራሺያ ሥእል — Diptych Icon",
    category: "የራሺያ ሥእሎች",
    price: 5200,
    stock: 4,
    image: shopRussianIcons,
    description: "የራሺያ ሥእል — silver-plated diptych icon of Christ and Theotokos.",
  },
  {
    id: "saint-set-01",
    name: "አቡነ ኪሮስ — Saint Set",
    category: "Books",
    price: 1800,
    stock: 8,
    image: shopSaintSet,
    description: "አቡነ ኪሮስ — icon, gadl book and prayer beads gift set.",
  },
  {
    id: "gift-abuqelemsis-01",
    name: "የአቡቀለምሲስ ሥጦታ — Abuqelemsis Bundle",
    category: "Gift Sets",
    price: 2600,
    stock: 6,
    image: giftSetAbuqelemsis,
    description: "የአቡቀለምሲስ ሥጦታ — spiritual books with handwoven netela in gift box.",
  },
  {
    id: "robe-01",
    name: "ቀሚስ — Black Liturgical Robe",
    category: "Vestments",
    price: 4200,
    stock: 5,
    image: shopRobe,
    description: "ቀሚስ — flowing black liturgical robe with gold clasp.",
  },
  {
    id: "vest-01",
    name: "ቀሚስ — Cream Cape Vestment",
    category: "Vestments",
    price: 3800,
    stock: 4,
    image: vestCapeCream,
    description: "ቀሚስ — flowing cream liturgical cape with gold clasp.",
  },
  {
    id: "vest-02",
    name: "ቀሚስ — White Cape Vestment",
    category: "Vestments",
    price: 3900,
    stock: 4,
    image: vestCapeWhite,
    description: "ቀሚስ — pure white liturgical cape with gold beaded clasp.",
  },
  {
    id: "vest-03",
    name: "ቀሚስ — Gold Clasp Cape",
    category: "Vestments",
    price: 4100,
    stock: 3,
    image: vestCapeGoldClasp,
    description: "ቀሚስ — white cape vestment with chained gold clasp detail.",
  },
  {
    id: "vest-04",
    name: "ቀሚስ — Silver Cross Tunic",
    category: "Vestments",
    price: 4600,
    stock: 4,
    image: vestSilverCross,
    description: "ቀሚስ — white tunic and shawl set with silver cross embroidery.",
  },
  {
    id: "vest-05",
    name: "ቀሚስ — Fur Collar Cape",
    category: "Vestments",
    price: 5200,
    stock: 3,
    image: vestFurCape,
    description: "ቀሚስ — soft white cape vestment with plush fur collar.",
  },
  {
    id: "vest-06",
    name: "ቀሚስ — Gold Embroidered Robe",
    category: "Vestments",
    price: 5400,
    stock: 3,
    image: vestGoldEmb,
    description: "ቀሚስ — white liturgical robe with intricate gold cross embroidery.",
  },
  {
    id: "vest-07",
    name: "ቀሚስ — Black Embroidered Robe",
    category: "Vestments",
    price: 5000,
    stock: 4,
    image: vestBlackEmb,
    description: "ቀሚስ — black liturgical robe with gold and red cross embroidery.",
  },
  {
    id: "vest-08",
    name: "ቀሚስ — Bridal Habesha Gown",
    category: "Vestments",
    price: 6800,
    stock: 2,
    image: vestBridalGown,
    description: "ቀሚስ — silver-trimmed Habesha bridal gown with cross motifs.",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(n);
