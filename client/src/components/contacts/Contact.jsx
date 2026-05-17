"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  Users,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  User,
  Crown,
  Briefcase,
  GraduationCap,
  Zap,
  Eye,
  MessageCircle,
  X,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"
import { Link } from "react-router-dom";

// Define a mapping of display label and route path
const years = [
  { label: "2025-26", path: "/contact" },
  { label: "2024-25", path: "/contact/24" },
  { label: "2023-24", path: "/contact/23" },
  { label: "2022-23", path: "/contact/22" },
  { label: "2021-22", path: "/contact/21" },
  { label: "2020-21", path: "/contact/20" },
];
// Import profile images
// import Agrim from "../../assets/images/contact25/Agrim.jpg"
import Ayush from "../../assets/images/contact25/Ayush.png"
import Rahul from "../../assets/images/contact25/Rahul.png"
import Aabha from "../../assets/images/contact25/Aabha.jpg"
import Divyanshi from "../../assets/images/contact25/Divyanshi.jpg"
import mdsaud from "../../assets/images/contact25/mdsaud.jpg"
import Nilay from "../../assets/images/contact25/Nilay.png"
import Saransh from "../../assets/images/contact25/Saransh.jpg"
import Siya from "../../assets/images/contact25/Siya.jpg"
import Tanmay from "../../assets/images/contact25/Tanmay.JPG"
import Kalash from "../../assets/images/contact25/Kalash.webp"
import sanbed from "../../assets/images/contact25/Sanbed.jpg"
import Prehas from "../../assets/images/contact25/Prehas.jpg"

import Abhinav from '../../assets/images/contact2024/Abhinav.jpg';
import Agrim from '../../assets/images/contact2024/Agrim.jpg';
import Amrit from '../../assets/images/contact2024/Amrit.jpeg';
import Anvita from '../../assets/images/contact2024/Anvita.jpg';
import Damodar from '../../assets/images/contact2024/Damodar.jpg';
import Harry from '../../assets/images/contact2024/Harry.jpeg';
import Harsh from '../../assets/images/contact2024/Harsh.jpg';
import Maitri from '../../assets/images/contact2024/Maitri.jpg';
import Minal from '../../assets/images/contact2024/Minal.jpg';
import Pratiksh from '../../assets/images/contact2024/Pratiksh.jpg';
import Shreya from '../../assets/images/contact2024/Shreya.jpg';
import Sneha from '../../assets/images/contact2024/Sneha.jpg';
import Steve from '../../assets/images/contact2024/Steve.jpg';

import Gohil from '../../assets/images/contact23/Gohil.jpg';
import hridyansh from '../../assets/images/contact23/hridyansh.jpg';
import kunal from '../../assets/images/contact23/kunal.jpg';
import maitri from '../../assets/images/contact23/maitri.jpg';
import Prarthana from '../../assets/images/contact23/Prarthana.jpg';
import pratiksha from '../../assets/images/contact23/pratiksha.jpg';
import radhika from '../../assets/images/contact23/radhika.jpg';
import steve from '../../assets/images/contact23/steve.jpg';
import swapnil from '../../assets/images/contact23/swapnil.jpg';
import tanay from '../../assets/images/contact23/tanay.jpg';

import image30 from '../../assets/images/contact22/image30.webp';
import image31 from '../../assets/images/contact22/image31.webp';
import image32 from '../../assets/images/contact22/image32.webp';
import image33 from '../../assets/images/contact22/image33.webp';
import image34 from '../../assets/images/contact22/image34.webp';
import image35 from '../../assets/images/contact22/image35.webp';
import image36 from '../../assets/images/contact22/image36.webp';
import image37 from '../../assets/images/contact22/image37.webp';
import image38 from '../../assets/images/contact22/image38.webp';
import image39 from '../../assets/images/contact22/image39.webp';
import image40 from '../../assets/images/contact22/image40.webp';
import Khyati from '../../assets/images/contact22/Khyati.webp';
import Parth from '../../assets/images/contact22/Parth.webp';
import tanay1 from '../../assets/images/contact22/tanay1.jpg';

import c211 from '../../assets/images/contact21/c211.webp';
import c212 from '../../assets/images/contact21/c212.webp';
import c213 from '../../assets/images/contact21/c213.webp';
import c215 from '../../assets/images/contact21/c215.webp';
import c216 from '../../assets/images/contact21/c216.webp';
import c217 from '../../assets/images/contact21/c217.webp';
import c218 from '../../assets/images/contact21/c218.webp';
import c219 from '../../assets/images/contact21/c219.webp';
import c2110 from '../../assets/images/contact21/c2110.webp';
import c2111 from '../../assets/images/contact21/c2111.webp';
import c2112 from '../../assets/images/contact21/c2112.webp';
import nikunj from '../../assets/images/contact21/nikunj.jpg';

import AryanD from '../../assets/images/contact24/AryanD.webp'
import AryanR from '../../assets/images/contact24/AryanR.webp'
import Druv from '../../assets/images/contact24/Druv.webp'
import Laksham from '../../assets/images/contact24/Laksham.webp'
import Mitanshi from '../../assets/images/contact24/Mitanshi.webp'
import Pragathi from '../../assets/images/contact24/Pragathi.webp'
import Rishav from '../../assets/images/contact24/Rishav.webp'
import Ritesh from '../../assets/images/contact24/Ritesh.webp'
import Sarthak from '../../assets/images/contact24/Sarthak.webp'
import Sinha from '../../assets/images/contact24/Sinha.webp'
// Chemical equipment for floating animations
const chemicalEquipment = [
  { size: 100, opacity: 0.08, rotation: 45, icon: Flask },
  { size: 80, opacity: 0.12, rotation: -30, icon: TestTube },
  { size: 120, opacity: 0.06, rotation: 60, icon: Beaker },
  { size: 90, opacity: 0.15, rotation: -45, icon: Atom },
]

// Chemical formulas for decorative elements
const chemicalFormulas = ["Team", "Lead", "Org", "Comm", "Mgmt", "Coord", "Admin"]

// Chemical droplets with enhanced properties

// Position hierarchy with chemical theming


// UG Council Data
const ugData25 = [
  {
    name: "Aabha Lahurikar",
    image: Aabha,
    position: "Department General Secretary",
    phone: "8767057091",
    email: "dgsec@che.iitb.ac.in",
    instagram: "https://www.instagram.com/aabha_lahurikar/?igshid=ZDc4ODBmNjlmNQ%3D%3D",
    linkedin: "https://www.linkedin.com/in/aabha-lahurikar-498780255/",
    specialty: "Leadership & Coordination",
  },
  {
    name: "Shubham Kumar",
    image: Harry,
    position: "Joint Secretary, Industrial Outreach",
    phone: "8541873913",
    email: "shubhamherry.iitb@gmail.com",
    facebook: "https://www.facebook.com/gohil.singhal.5",
    instagram: "https://www.instagram.com/shubham_herry/",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-iitb/",
    specialty: "Industry Relations",
  },
  {
    name: "Ayush Tayal",
    image: Ayush,
    position: "Joint Secretary, Academic Affairs",
    phone: "8171548721",
    email: "tayalayush03@gmail.com",
    facebook: "https://www.facebook.com/ayush.tayal.9?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/its_tayalayush?igsh=b3hucTV5Mnpkd2x2",
    linkedin: "https://www.linkedin.com/in/tayalayush03",
    specialty: "Academic Excellence",
  },
  {
    name: "Agrim Jain",
    image: Agrim,
    position: "Joint Secretary, Events",
    phone: "9045839776",
    email: "agrimj2712@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=100084896567870",
    instagram: "https://www.instagram.com/agrimj2712/",
    linkedin: "https://www.linkedin.com/in/agrim-jain-934226230/",
    specialty: "Event Management",
  },
  {
    name: "Rahul Pal",
    image: Rahul,
    position: "Technical Secretary",
    phone: "7307185487",
    email: "rahulpal.per@gmail.com",
    instagram: "https://www.instagram.com/raahull_pal?igsh=NTNraXdhb3lkdzhy",
    linkedin: "www.linkedin.com/in/rahulpal-iitb",
    specialty: "Technical Innovation",
  },
  {
    name: "Saransh Jain",
    image: Saransh,
    position: "Social Secretary",
    phone: "7693092888",
    email: "saranshjainn.01@gmail.com",
    instagram: "https://www.instagram.com/saransh.jain_01?igsh=MTUxeDVpdTBrMXlwNQ==",
    linkedin: "https://www.linkedin.com/in/rahul-pal-a4bb1933b",
    specialty: "Community Building",
  },
  {
    name: "Siya Sarda",
    image: Siya,
    position: "Associate Secretary",
    phone: "9354609131",
    email: "siyasarda.chea@gmail.com",
    instagram: "https://www.instagram.com/itssiyasarda?igsh=d29vdjVjMzhtdzdm",
    linkedin: "https://www.linkedin.com/in/siyasarda18/",
    specialty: "Operations Support",
  },
  {
    name: "Tanmay Sonkar",
    image: Tanmay,
    position: "Associate Secretary",
    phone: "8840035159",
    email: "tanmaysonkar.chea@gmail.com",
    instagram: "https://www.instagram.com/tanmay_sonkar._?igsh=cW04c3Q0NzJzNDA4",
    linkedin: "https://www.linkedin.com/in/tanmay-sonkar-670aaa330",
    specialty: "Administrative Affairs",
  },
  {
    name: "Nilay Kanakia",
    image: Nilay,
    position: "Editor",
    phone: "9987936599",
    email: "24b0386@iitb.ac.in",
    instagram: "https://www.instagram.com/nilaykanakia2410?igsh=MXI2b2NibWhucnc5Yg==",
    specialty: "Content Creation",
  },
  {
    name: "Divyanshi Agrawal",
    image: Divyanshi,
    position: "Design Secretary",
    phone: "8793140610",
    email: "24b0391@iitb.ac.in",
    instagram: "https://www.instagram.com/divyanshiagrawal_13?igsh=eXNvcWdzdnV0MW1m",
    specialty: "Visual Design",
  },
  {
    name: "Kalash Airan",
    image: Kalash,
    position: "Sports Secretary",
    phone: "7999148464",
    email: "24b0393@iitb.ac.in",
    specialty: "Sports & Recreation",
  },
];

// PG Council Data
const pgData25 = [
  // {
  //   name: "Mohammed Saud Shaikh",
  //   image: sanbed,
  //   position: "M. Tech Representative",
  //   phone: "9930247998",
  //   email: "sauddjhs@gmail.com",
  //   linkedin: "https://www.linkedin.com/in/mohammedsaud786/",
  //   specialty: "Graduate Research",
  // },
  {
    name: "Sanbed Das",
    image: sanbed,
    position: "PhD Representative",
    phone: "8583935116",
    email: "sanbed@iitb.ac.in",
    // instagram: "https://www.instagram.com/prehasmadke/",
    linkedin: "https://www.linkedin.com/in/sanbed-d-265491185",
    specialty: "Doctoral Research",
  },
];

const ugData24 = [{
    "name": "Amrit Raj",
    "image": Amrit,
    "position": "Department General Secretary",
    "phone": "7545855055, 8529756127",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  {
    "name": "Steve Austin Samuel",
    "image": Steve,
    "position": "Joint Secretary Events",
    "phone": "9600082807",
    "email": "steveaustinsamuel@gmail.com",
    "facebook": "https://www.facebook.com/steve.austin.samuel?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mainhoonsteve?igshid=NGExMmI2YTkyZg==",
    "linkedin": "https://www.linkedin.com/in/steve-austin-samuel-a2a8b6155"
  },
  {
    "name": "Pratiksha Kapoor",
    "image": Pratiksh,
    "position": "Joint Secretary Industrial Outreach",
    "phone": "9152929329, 8605661520",
    "email": "pratiksha.kapoor@iitb.ac.in",
    "instagram": "https://www.instagram.com/pratikshakapoor89/",
    "linkedin": "https://www.linkedin.com/in/pratiksha-kapoor-66b384250/"
  },
  {
    "name": "Maitreyee Tengshe",
    "image": Maitri,
    "position": "Joint Secretary Academic Affairs",
    "phone": "7030909443",
    "email": "22b0318@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100089717880314&mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/maitreyee_.38?r=nametag",
    "linkedin": "https://www.linkedin.com/in/maitreyee-tengshe-810812252"
  },
  {
    "name": "Abhinav Kumar",
    "image": Abhinav,
    "position": "Associate Secretary",
    "phone": "6201395251",
    "email": "abhinavkrrr@gmail.com",
    "instagram": "https://www.instagram.com/pablo_chocobar.cpp?igsh=c2FvZHJuaHY2MnZz",
    "linkedin": "https://www.linkedin.com/in/abhinav-kumar-499004280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Shubham Kumar",
    "image": Harry,
    "position": "Associate Secretary",
    "phone": "8541873913",
    "email": "shubhamherry.iitb@gmail.com",
    "instagram": "https://www.instagram.com/shubham_herry/",
    "linkedin": "https://www.linkedin.com/in/shubham-kumar-iitb/"
  },
  {
    "name": "Ayush Tayal",
    "image": Ayush,
    "position": "Social Secretary",
    "phone": "8171548721",
    "email": "tayalayush03@gmail.com",
    "facebook": "https://www.facebook.com/ayush.tayal.9?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/its_tayalayush?igsh=b3hucTV5Mnpkd2x2",
    "linkedin": "https://www.linkedin.com/in/tayalayush03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Agrim Jain",
    "image": Agrim,
    "position": "Sports Secretary",
    "phone": "9045839776",
    "email": "agrimj2712@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100084896567870",
    "instagram": "https://www.instagram.com/agrimj2712/",
    "linkedin": "https://www.linkedin.com/in/agrim-jain-934226230/"
  },
  {
    "name": "Damodar Pendse",
    "image": Damodar,
    "position": "Alumni Secretary",
    "phone": "7350644940",
    "email": "23b0429@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=61561073463381",
    "instagram": "https://www.instagram.com/damitssme/",
    "linkedin": "https://www.linkedin.com/in/damodar-pendse/"
  },
  {
    "name": "Shreya Pingle",
    "image": Shreya,
    "position": "Editor",
    "phone": "8999965946",
    "email": "aabha1006@gmail.com",
    "instagram": "https://www.instagram.com/shreya_pingle2303?igsh=MW11MzJ6bHZmdzNrdA%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shreya-pingle-20442124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Anvitaa Goel",
    "image": Anvita,
    "position": "Design Secretary",
    "phone": "8860751667",
    "email": "goelanvitaa@gmail.com",
    "instagram": "https://www.instagram.com/anvitaagoel?igsh=ZTByd2Eyb3I1dHl4",
    "linkedin": "http://www.linkedin.com/in/anvitaa-goel-b4817631a"
  },
  {
    "name": "Sneha Shandilya",
    "image": Sneha,
    "position": "Web Secretary",
    "phone": "7665246878",
    "email": "23b0345@iitb.ac.in",
    "instagram": "https://www.instagram.com/snehashandilya09/",
    "linkedin": "https://www.linkedin.com/in/shandilyasneha09/"
  },
  {
    "name": "Harsh Jadhav",
    "image": Harsh,
    "position": "S1 Class Representative",
    "phone": "8369526409",
    "email": "23b0301@iitb.ac.in",
    "instagram": "https://www.instagram.com/hharshh.27?igsh=OXl0eTR6c2hucnR2&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/harsh-jadhav-1qw12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Minal Bhojasia",
    "image": Minal,
    "position": "S2 Class Representative",
    "phone": "9113801656",
    "email": "23b0404@iitb.ac.in",
    "instagram": "https://www.instagram.com/minal.bhojasia/",
    "linkedin": "https://www.linkedin.com/in/minal-bhojasia-346ba9281/"
  }];
const pgData24 = [{
    "name": "Mohammed Saud Shaikh",
    "image":mdsaud,
    "position": "M. Tech Representative",
    "phone": "9930247998",
    "email": "sauddjhs@gmail.com",
    "linkedin": "https://www.linkedin.com/in/mohammedsaud786/"
  },
  {
    "name": "Prehas Madke",
    "image":Prehas,
    "position": "PhD Representative",
    "phone": "9834706856",
    "email": "23D0125@iitb.ac.in",
    "instagram": "https://www.instagram.com/prehasmadke/",
    "linkedin": "https://www.linkedin.com/in/prehasmadke"
  }];

const ugData23 = [{
    "name": "Parth Manish Dani",
    "image":Parth,
    "position": "Department General Secretary",
    "phone": "9323294005",
    "email": "dgsec@che.iitb.ac.in, parth.chea@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100010070436244",
    "instagram": "https://instagram.com/parth_dani_?igshid=ZGUzMzM3NWJiOQ==",
    "linkedin": "https://www.linkedin.com/in/parth-dani-538542201"
  },
  {
    "name": "Amrit Raj",
    "image": Amrit,
    "position": "Joint Secretary Academic Affairs",
    "phone": "7545855055, 8529756127",
    "email": "210020016@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  {
    "name": "Tanay Mestry",
    "image": tanay,
    "position": "Joint Secretary Events",
    "phone": "9004837295",
    "email": "tanaypm6129@gmail.com",
    "facebook": "https://www.facebook.com/tanay.mestry?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mtanay15?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/tanay-mestry-2b6380228"
  },
  {
    "name": "Gohil Singhal",
    "image": Gohil,
    "position": "Social Secretary",
    "phone": "7665600257",
    "email": "22B0373@iitb.ac.in",
    "facebook": "https://www.facebook.com/gohil.singhal.5",
    "instagram": "https://www.instagram.com/gohil_singhal/",
    "linkedin": "https://www.linkedin.com/in/gohil-singhal-03aab6253/"
  },
  {
    "name": "Radhika Goyal",
    "image": radhika,
    "position": "Sports Secretary",
    "phone": "7850087763",
    "email": "22b0423@iitb.ac.in",
    "instagram": "https://www.instagram.com/_radhikaagoyal/#"
  },
  {
    "name": "Maitreyee Tengshe",
    "image": maitri,
    "position": "Alumni Secretary",
    "phone": "7030909443",
    "email": "maitu.ten@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100089717880314&mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/maitreyee_.38?r=nametag",
    "linkedin": "https://www.linkedin.com/in/maitreyee-tengshe-810812252"
  },
  {
    "name": "Aabha Lahurikar",
    "image": Aabha,
    "position": "Editor",
    "phone": "8767057091",
    "email": "aabha1006@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100092148917301",
    "instagram": "https://instagram.com/aabha_lahurikar?igshid=ZDc4ODBmNjlmNQ==",
    "linkedin": "https://www.linkedin.com/in/aabha-lahurikar-498780255/"
  },
  {
    "name": "Steve Austin Samuel",
    "image": steve,
    "position": "Design Secretary",
    "phone": "9600082807",
    "email": "steveaustinsamuel@gmail.com",
    "facebook": "https://www.facebook.com/steve.austin.samuel?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mainhoonsteve?igshid=NGExMmI2YTkyZg==",
    "linkedin": "https://www.linkedin.com/in/steve-austin-samuel-a2a8b6155"
  },
  {
    "name": "Prarthana Joy Francis",
    "image": Prarthana,
    "position": "Web Secretary",
    "phone": "7067083081, 8989192224",
    "email": "prarthanafrancis10@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100093284233605&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/prarthana__10?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/prarthana-francis-74a945257"
  },
  {
    "name": "Hridyansh Bhargava",
    "image": hridyansh,
    "position": "S1 Class Representative",
    "phone": "7976979245",
    "email": "22b0415@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100093182304107",
    "instagram": "https://instagram.com/hridyansh_bhargava_04?igshid=MzRlODBiNWFlZA==",
    "linkedin": "https://www.linkedin.com/in/hridyansh-bhargava-35a390253"
  },
  {
    "name": "Pratiksha Kapoor",
    "image": pratiksha,
    "position": "S2 Class Representative",
    "phone": "9152929329, 8605661520",
    "email": "22b0372@iitb.ac.in",
    "instagram": "https://www.instagram.com/pratikshakapoor89/",
    "linkedin": "https://www.linkedin.com/in/pratiksha-kapoor-66b384250/"
  }];
const pgData23 = [{
    "name": "Swapnil Damke",
    "image": swapnil,
    "position": "M. Tech Representative",
    "phone": "7020128597",
    "linkedin": "https://www.linkedin.com/in/swapnil-damke-92959b261"
  },
  {
    "name": "Kunal Sharma",
    "image": kunal,
    "position": "PhD Representative",
    "phone": "7385238932",
    "instagram": "Kunalsharma6996",
    "facebook": "https://www.facebook.com/profile.php?id=100007163013625",
    "linkedin": "https://www.linkedin.com/in/kunal-sharma-2b4676137"
  }];

const ugData22 = [{
    "name": "Khyati Jain",
    "image":Khyati,
    "position": "Department General Secretary",
    "phone": "9465500286",
    "email": "dgsec@che.iitb.ac.in, khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Parth Manish Dani",
    "image": Parth,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9323294005",
    "email": "200020090@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100010070436244",
    "instagram": "https://www.instagram.com/parth_dani_/",
    "linkedin": "https://www.linkedin.com/in/parth-dani-538542201/"
  },
  {
    "name": "Vinit Nikam",
    "image": image30,
    "position": "Joint Secretary Events",
    "phone": "7744052977",
    "email": "vinitnikam10@gmail.com",
    "facebook": "https://www.facebook.com/vinitnikam2211",
    "instagram": "https://www.instagram.com/vinitnikam10/",
    "linkedin": "https://www.linkedin.com/in/vinit-nikam-9b2861203"
  },
  {
    "name": "Tanay Mestry",
    "image": tanay1,
    "position": "Social Secretary",
    "phone": "9004837295",
    "email": "tanaypm6129@gmail.com",
    "facebook": "https://www.facebook.com/tanay.mestry?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/mtanay15/",
    "linkedin": "https://www.linkedin.com/in/tanay-mestry-2b6380228"
  },
  {
    "name": "Aditya Mahesh",
    "image": image32,
    "position": "Sports Secretary",
    "phone": "8882312835",
    "email": "adityamahesh44@gmail.com",
    "instagram": "https://www.instagram.com/adityamahesh44/"
  },
  {
    "name": "Tejas Lokhande",
    "image": image33,
    "position": "Alumni Secretary",
    "phone": "7057840139",
    "email": "tejas123lokhande@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100075412287191",
    "instagram": "https://instagram.com/tejas._.lokhande?igshid=MzRlODBiNWFlZA==",
    "linkedin": "https://www.linkedin.com/in/tejas-lokhande-8a941a20b"
  },
  {
    "name": "Srishti Badaya",
    "image": image34,
    "position": "Editor",
    "phone": "8850374718",
    "email": "210020139@iitb.ac.in",
    "instagram": "https://www.instagram.com/_srishtibadaya/",
    "linkedin": "https://www.linkedin.com/in/srishti-badaya-625484233/"
  },
  {
    "name": "Atharva Yeole",
    "image": image35,
    "position": "Design Secretary",
    "phone": "9420182884",
    "email": "210020027@iitb.ac.in",
    "facebook": "https://m.facebook.com/100074538175152/",
    "instagram": "https://www.instagram.com/atharva_yeole1/",
    "linkedin": "https://www.linkedin.com/in/atharva-yeole-355689226/"
  },
  {
    "name": "Bhavina Gajghate",
    "image": image36,
    "position": "Web Secretary",
    "phone": "9356951687",
    "email": "gajghate.bhavina@gmail.com",
    "facebook": "https://www.facebook.com/bhavinagajghate/",
    "instagram": "https://www.instagram.com/bhavina.g/",
    "linkedin": "https://www.linkedin.com/in/bhavina-gajghate/"
  },
  {
    "name": "Soumya Mandal",
    "image": image37,
    "position": "S1 Class Representative",
    "phone": "9476327311",
    "email": "somyamandal0708@gmail.com"
  },
  {
    "name": "Amrit Raj",
    "image": image38,
    "position": "S2 Class Representative",
    "phone": "7545855055, 8529756127",
    "email": "210020016@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  }];
const pgData22 = [{
    "name": "Astitva Mishra",
    "image": image39,
    "position": "M. Tech Representative",
    "phone": "8081683111",
    "email": "99astitva@gmail.com"
  },
  {
    "name": "Saikat Saha",
    "image": image40,
    "position": "PhD Representative",
    "phone": "7685928544",
    "email": "214020017@iitb.ac.in, saikatiitbche@gmail.com"
  }];
  const ugData21 = [
    {
      "name": "Aryan Dangayach",
      "image": c211,
      "position": "Department General Secretary",
      "phone": "9694126924, 6377104366",
      "email": "dgsec@che.iitb.ac.in",
      "facebook": "https://m.facebook.com/aryan.dangayach.3",
      "instagram": "https://www.instagram.com/_the_celestial/",
      "linkedin": "https://www.linkedin.com/in/aryan-dangayach-99aa47187/"
    },
    {
      "name": "Khyati Jain",
      "image": c212,
      "position": "Joint Secretary Academic Affairs",
      "phone": "9465500286",
      "email": "khyati.jain1105@gmail.com",
      "facebook": "https://www.facebook.com/khyati.jain.71653/",
      "instagram": "https://www.instagram.com/khyati.1105/",
      "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
    },
    {
      "name": "Mitanshi Mehra",
      "image": c213,
      "position": "Joint Secretary Events",
      "phone": "8824799892",
      "email": "mehramitanshi26@gmail.com",
      "facebook": "https://www.facebook.com/mitanshi.mehra.9",
      "instagram": "https://www.instagram.com/mehra_mitanshi26/",
      "linkedin": "https://www.linkedin.com/in/mitanshi-mehra-20010626/"
    },
    {
      "name": "Nikunj Shah",
      "image": nikunj,
      "position": "Social Secretary",
      "phone": "8668932327",
      "email": "nshah8678@gmail.com",
      "facebook": "https://www.facebook.com/people/Nikunj-Shah/pfbid02gxZrcFV6Xopnj8mdJVUqffbaR2Fk23fbF76yaqhbcRnRWrZDb2tZ8iS6r79KmhsNl/",
      "instagram": "https://www.instagram.com/_.nikunj_.shah__/",
      "linkedin": "https://www.linkedin.com/in/nikunj-shah-13a002204/"
    },
    {
      "name": "Vinit Nikam",
      "image": c215,
      "position": "Sports Secretary",
      "phone": "7744052977",
      "email": "vinitnikam10@gmail.com",
      "facebook": "https://www.facebook.com/vinitnikam2211",
      "instagram": "https://www.instagram.com/vinitnikam10/",
      "linkedin": "https://www.linkedin.com/in/vinit-nikam-9b2861203/"
    },
    {
      "name": "Tanirika Roy",
      "image": c216,
      "position": "Alumni Secretary",
      "phone": "9890015831",
      "email": "tanry2013@gmail.com",
      "facebook": "https://www.facebook.com/tanirika.roy.3",
      "instagram": "https://www.instagram.com/roy_tan._/",
      "linkedin": "https://www.linkedin.com/in/tanirika-roy-5774801b8/"
    },
    {
      "name": "Parth Dani",
      "image": c217,
      "position": "Editor",
      "phone": "9323294005",
      "email": "200020090@iitb.ac.in",
      "facebook": "https://www.facebook.com/people/Parth-Dani/pfbid02USeX77m9fFhbGSFcvRXco8kFFZoJfizNLXGGss8ukPFeeNoLP6Tp2hVA4iSik2fal/",
      "instagram": "https://www.instagram.com/parth_dani_/",
      "linkedin": "https://www.linkedin.com/in/parth-dani-538542201"
    },
    {
      "name": "Divij Goyal",
      "image": c218,
      "position": "Design Secretary",
      "phone": "8527406687, 8368073120",
      "email": "goyaldivij06@gmail.com",
      "facebook": "https://www.facebook.com/divij.goyal.92",
      "instagram": "https://www.instagram.com/divijgoyal.06/",
      "linkedin": "https://www.linkedin.com/in/goyaldivij/"
    },
    {
      "name": "Shashank Ajmera",
      "image": c219,
      "position": "Web Secretary",
      "phone": "8275128511, 8626086275",
      "email": "shashanksajmera@gmailcom",
      "facebook": "https://www.facebook.com/shashank.ajmera.9",
      "instagram": "https://www.instagram.com/0520shashank/",
      "linkedin": "https://www.linkedin.com/in/shashank-ajmera/"
    },
    {
      "name": "Om Mihani",
      "image": c2110,
      "position": "S1 Class Representative",
      "phone": "7887777797",
      "email": "200020085@iitb.ac.in",
      "facebook": "https://www.facebook.com/om.mihani.18/",
      "instagram": "https://www.instagram.com/om_mihani/",
      "linkedin": "https://www.linkedin.com/in/om-mihani/"
    },
    {
      "name": "Tanmay Lodha",
      "image": c2111,
      "position": "S2 Class Representative",
      "phone": "7739145470",
      "email": "tanmay.lodha2002@gmail.com",
      "facebook": "https://www.facebook.com/tanmay.lodha.50/",
      "instagram": "https://www.instagram.com/_tanmay_lodha/",
      "linkedin": "https://www.linkedin.com/in/tanmay-lodha-428542213/"
    },
    
  ];
  
  const pgData21 = [
    {
      "name": "Janak Patel",
      "image": c2112,
      "position": "M. Tech Representative",
      "phone": "8511435454",
      "email": "janakpatel472@gmail.com",
      "instagram": "https://www.instagram.com/janak_2810/",
      "linkedin": "https://www.linkedin.com/in/janak-patel-19a932182/"
    }
  ];
  
const ugData20 = [
  {
    "name": "Rishabh Agrawal",
    "image": Rishav,
    "position": "Department General Secretary",
    "phone": "9983295518",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/rishabh.agrawal.3194524/",
    "instagram": "https://www.instagram.com/rsbh2199/",
    "linkedin": "https://www.linkedin.com/in/rishabh-agrawal-0a98a3157/"
  },
  {
    "name": "Aryan Dangayach",
    "image": AryanD,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9694126924,6377104366",
    "email": "aryankhandelwal418@gmail.com",
    "facebook": "https://m.facebook.com/aryan.dangayach.3",
    "instagram": "https://www.instagram.com/_the_celestial/",
    "linkedin": "https://www.linkedin.com/in/aryan-dangayach-99aa47187/"
  },
  {
    "name": "Sarthak Tripathi",
    "image": Sarthak,
    "position": "Joint Secretary Events",
    "phone": "8824799892",
    "email": "sarthaktripathi5june@gmail.com",
    "facebook": "https://www.facebook.com/sarthak.tripathi.16144",
    "instagram": "https://www.instagram.com/__sarthaktripathi__/",
    "linkedin": "https://www.linkedin.com/in/sarthak-tripathi-0400aa187/"
  },
  {
    "name": "Mitanshi Mehra",
    "image": Mitanshi,
    "position": "Social Secretary",
    "phone": "8824799892",
    "email": "mehramitanshi26@gmail.com",
    "facebook": "https://www.facebook.com/mitanshi.mehra.9",
    "instagram": "https://www.instagram.com/mehra_mitanshi26/",
    "linkedin": "https://www.linkedin.com/in/mitanshi-mehra-20010626/"
  },
  {
    "name": "Ritesh Meena",
    "image": Rishav,
    "position": "Sports Secretary",
    "phone": "8692023459",
    "email": "riteshmeena2211@gmail.com",
    "facebook": "https://m.facebook.com/ritesh.meena.7121",
    "instagram": "https://www.instagram.com/ritzmeena/"
  },
  {
    "name": "Khyati Jain",
    "image": Khyati,
    "position": "Alumni Secretary",
    "phone": "9465500286",
    "email": "khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653/",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Dhruv Patwa",
    "image": Druv,
    "position": "Editor",
    "phone": "8890789269",
    "email": "patwadhruv@gmail.com",
    "facebook": "https://www.facebook.com/dhruv.patwa.5",
    "instagram": "https://www.instagram.com/patwa.dhruv/",
    "linkedin": "https://www.linkedin.com/in/dhruv-patwa-69b5b5149/"
  },
  {
    "name": "Laxman Desai",
    "image": Laksham,
    "position": "Design Secretary",
    "phone": "8208078914",
    "email": "desai.laxman2001@gmail.com"
  },
  {
    "name": "Shambhavi Sinha",
    "image": Sinha,
    "position": "Web Secretary",
    "phone": "7043754962",
    "email": "190020103@iitb.ac.in"
  },
  {
    "name": "Aryan Raj Himanshu",
    "image": AryanR,
    "position": "S1 Class Representative",
    "phone": "7777023377",
    "facebook": "https://m.facebook.com/people/Aryan-Raj-Himanshu/100039404290875",
    "linkedin": "https://www.linkedin.com/in/aryan-raj-himanshu-5a6a4918b/"
  },
  {
    "name": "Pragathi Anand",
    "image": Pragathi,
    "position": "S2 Class Representative",
    "phone": "6204544899",
    "email": "190020084@iitb.ac.in",
    "facebook": "https://www.facebook.com/pragati.anand.942"
  }
];



export default function Contact() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null);
  const [ugData, updateUG] = useState([ugData25,ugData24, ugData23, ugData22, ugData21, ugData20]);
  const [pgData, updatePG] = useState([pgData25,pgData24,pgData23,pgData22,pgData21,[]]);
  const [currentPage, updatePage] = useState(0);
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [currentYear, updateYear] = useState(0);
  const x = useTransform(mouseX, (x) => (x - window.innerWidth / 2) * 0.01)
  const y = useTransform(mouseY, (y) => (y - window.innerHeight / 2) * 0.01)



  

  const getTransform = useCallback(
    (mult = 0.01) => {
      return { x, y }
    },
    [x, y],
  )


  // Enhanced member card with chemical theme and optimized hover
  const ChemicalMemberCard = ({ member, index, isUG = true }) => {
    const [isHovered, setIsHovered] = useState(false)

   

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-[#315D9C]/20 transition-all duration-300 overflow-hidden min-h-[400px]"
          transition={{ duration: 0.2 }}
        >

          {/* Member Photo */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-square w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover cursor-pointer"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Photo Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#0B1E38]/60 via-transparent to-transparent flex items-end justify-center pb-4"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>

          </div>

          {/* Member Info */}
          <div className="relative z-10 space-y-3">
            <motion.h3
              className="text-lg font-bold transition-colors duration-300"
              // animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
            >
              {member.name}
            </motion.h3>

            <motion.p
              className="text-sm font-semibold transition-colors duration-300"
              animate={{ color: isHovered ? "#22d3ee" : "#06b6d4" }}
            >
              {member.position}
            </motion.p>

            {member.specialty && (
              <motion.p
                className="text-xs transition-colors duration-300"
                animate={{ color: isHovered ? "#9ca3af" : "#6b7280" }}
              >
                {member.specialty}
              </motion.p>
            )}

            {/* Contact Info */}
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-emerald-400" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-cyan-400" />
                <span className="truncate">{member.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-2 pt-2"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {member.instagram && (
                <motion.a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-pink-400/20 hover:bg-pink-400/30 rounded-lg text-pink-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={14} />
                </motion.a>
              )}
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={14} />
                </motion.a>
              )}
              {member.facebook && (
                <motion.a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={14} />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Chemical Reaction Indicator */}
          <motion.div
            className="absolute bottom-2 left-1/2 w-2 h-2 bg-[#4A8DFF] rounded-full"
            style={{ x: "-50%" }}
            animate={{
              scale: isHovered ? [0, 1, 0] : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              opacity: { duration: 0.3 },
            }}
          />
        </motion.div>
      </motion.div>
    )
  }

  // Member Modal Component
  
  return (
    <div ref={ref} className="overflow-hidden">
      <div className="relative bg-[#0b1e38] text-white min-h-screen">

        {/* Main Content */}
        <section className="relative z-10 px-6 lg:px-16 py-30 md:py-40">
          {/* Header with Chemical Theme */}
          <motion.div
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Users size={40} className="text-[#4A8DFF]" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                ChEA{" "}
                <span>
                  COUNCIL
                </span>
              </h1>
              <motion.div
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Crown size={40} className="text-[#4A8DFF]" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the dedicated leaders driving innovation and excellence in Chemical Engineering
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
  {years.map(({ label, path }, index) => (
    // <Link to={path} key={label}>
      <motion.button
      style={{"cursor":"pointer"}}
        className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-sm ${
          index === currentPage
            ? "bg-[#4A8DFF]/20 hover:bg-[#4A8DFF]/30 text-[#adcbff] font-bold border-[#4A8DFF]/30"
            : "bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 border-slate-600/50"
        }`}
        whileHover={{ scale: 1.01 }}
        onClick={() => {updatePage(index)}}
        whileTap={{ scale: 0.99 }}
      >
        {label}
      </motion.button>
    // </Link>
  ))}
</div>

        
          </motion.div>

          {/* UG Council Section */}
          <motion.div
            className="mb-20 py-10"
            initial={{ opacity: 0,}}
            animate={isInView ? { opacity: 1} : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <GraduationCap size={32} className="text-emerald-400" />
              </motion.div>
              <h2 className="text-4xl font-bold">
                UG <span>Council</span>
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ugData[currentPage].map((member, index) => (
                <ChemicalMemberCard key={index} member={member} index={index} isUG={true} />
              ))}
            </div>
          </motion.div>

          {/* Chemical Divider */}
          <div className="flex justify-center mb-20">
            <motion.div
              className="w-40 h-0.5 bg-gradient-to-r from-transparent via-[#315D9C]/100 to-transparent relative"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ delay: 0, duration: .5 }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {/* <Zap size={16} className="text-emerald-400" /> */}
              </motion.div>
            </motion.div>
          </div>

          {/* PG Council Section */}
          <motion.div
            initial={{ opacity: 0,}}
            animate={isInView ? { opacity: 1} : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Crown size={32} className="text-[#4A8DFF]" />
              </motion.div>
              <h2 className="text-4xl font-bold">
                PG <span>Council</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pgData[currentPage].map((member, index) => (
                <ChemicalMemberCard key={index} member={member} index={index} isUG={false} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Member Modal */}
      </div>
    </div>
  )
}
