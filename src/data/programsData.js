import {
    GraduationCap,
    BookOpen,
    Users,
    Package,
    Heart,
    Droplets,
    Truck,
    Stethoscope,
    ShieldCheck,
    Moon,
    Gift,
    HeartHandshake,
    HandCoins,
    Briefcase,
} from 'lucide-react';

import educationImg from '../assets/EducationPage.png';
import foodPackImg from '../assets/FamilyFoodPackage.png';
import waterProjectImg from '../assets/WaterProject.png';
import emergencyReliefImg from '../assets/EmergencyRelief.png';
import medicalAidImg from '../assets/MedicalPage.png';
import seasonalGivingImg from '../assets/SeasonalGiving.png';
import sponsorTeacherImg from '../assets/sponsorTeacherImg.png';
import sponsorWidowImg from '../assets/sponsorWidowImg.png';
import sponsorStudentImg from '../assets/SponsorStudent.png';

// Each key is the URL slug used at /programs/:slug
const programsData = {
    education: {
        heroTitle: 'Education',
        heroSubtitle: 'Supporting students with learning materials, school essentials, and educational care.',
        image: educationImg,
        imageAlt: 'Education Support',
        badge: 'Education Support',
        heading: 'Help children continue learning with dignity',
        body: 'Our Education program helps children access essential school supplies, learning materials, and educational support. The goal is to reduce barriers to learning and give students the tools they need to build a better future.',
        checklist: [
            'School supplies and learning materials for children',
            'Support for students from vulnerable families',
            'Education assistance that helps build future opportunities',
        ],
        sideCards: [
            { title: 'School Support', description: 'Providing children with the learning tools they need to continue education.', Icon: GraduationCap },
            { title: 'Learning Materials', description: 'Helping students access books, stationery, and essential school supplies.', Icon: BookOpen },
            { title: 'Student Care', description: 'Supporting vulnerable students with dignity, encouragement, and opportunity.', Icon: Users },
        ],
    },

    'family-food-pack': {
        heroTitle: 'Food Security',
        heroSubtitle: 'Monthly food packs and essential support for families in need.',
        image: foodPackImg,
        imageAlt: 'Family Food Pack',
        badge: '£80 Donation Package',
        heading: 'Deliver food support to families in need',
        body: 'The Family Food Pack program provides essential food supplies to vulnerable families facing financial hardship and food insecurity. Each package is prepared to help families meet their basic needs with dignity and care.',
        checklist: [
            'Monthly food assistance for families in need',
            'Support for vulnerable households and low-income families',
            'Donation packages prepared with essential food supplies',
        ],
        sideCards: [
            { title: 'Essential Food', description: 'Staple items prepared to support families with their basic daily meals.', Icon: Package },
            { title: 'Family Support', description: 'Designed for vulnerable households facing financial hardship.', Icon: Users },
            { title: 'Community Relief', description: 'Helping communities with dignity, care, and trusted support.', Icon: Heart },
        ],
    },

    'water-projects': {
        heroTitle: 'Water Projects',
        heroSubtitle: 'Providing clean and safe water access to communities in need.',
        image: waterProjectImg,
        imageAlt: 'Water Well',
        badge: 'Clean Water Support',
        heading: 'Help provide safe water for vulnerable communities',
        body: 'Our Water Projects support families and communities by improving access to clean, safe, and reliable water. These initiatives help reduce hardship and improve health, hygiene, and daily living conditions.',
        checklist: [
            'Clean water access for underserved communities',
            'Support for families affected by water scarcity',
            'Projects designed to improve health and hygiene',
        ],
        sideCards: [
            { title: 'Clean Water', description: 'Providing sustainable access to safe drinking water.', Icon: Droplets },
            { title: 'Community Wells', description: 'Supporting underserved communities with water access.', Icon: Users },
            { title: 'Health & Hygiene', description: 'Improving health conditions through clean water initiatives.', Icon: Heart },
        ],
    },

    'emergency-relief': {
        heroTitle: 'Emergency Relief',
        heroSubtitle: 'Rapid support for families and communities during urgent crises.',
        image: emergencyReliefImg,
        imageAlt: 'Emergency Relief',
        badge: 'Emergency Support',
        heading: 'Respond quickly when families need urgent help',
        body: 'Our Emergency Relief program provides urgent assistance to families affected by crises, disasters, and difficult circumstances. Support may include food, shelter, basic essentials, and immediate care.',
        checklist: [
            'Emergency aid for families affected by crisis',
            'Support with food, shelter, and essential supplies',
            'Rapid response focused on dignity, safety, and recovery',
        ],
        sideCards: [
            { title: 'Rapid Response', description: 'Immediate aid delivered to families affected by crisis and hardship.', Icon: Truck },
            { title: 'Essential Support', description: 'Providing food, shelter items, and basic necessities during emergencies.', Icon: Heart },
            { title: 'Community Recovery', description: 'Helping vulnerable communities recover with dignity and care.', Icon: Users },
        ],
    },

    'medical-aid': {
        heroTitle: 'Medical Aid',
        heroSubtitle: 'Helping vulnerable families access healthcare, medicine, and urgent care.',
        image: medicalAidImg,
        imageAlt: 'Medical Aid',
        badge: 'Care & Medicine',
        heading: 'Support access to essential medical care',
        body: 'Our Medical Aid program supports vulnerable families with access to treatment, medicine, health checkups, and urgent medical care. This program helps reduce hardship for families who cannot afford essential healthcare.',
        checklist: [
            'Medical support for vulnerable families',
            'Help with treatment, checkups, and essential medicine',
            'Emergency healthcare assistance for urgent needs',
        ],
        sideCards: [
            { title: 'Health Checkups', description: 'Helping vulnerable families access basic medical assessments and care.', Icon: Stethoscope },
            { title: 'Care & Medicine', description: 'Supporting treatment, medicines, and essential healthcare needs.', Icon: Heart },
            { title: 'Emergency Support', description: 'Providing urgent medical assistance during difficult situations.', Icon: ShieldCheck },
        ],
    },

    'seasonal-giving': {
        heroTitle: 'Seasonal Giving',
        heroSubtitle: 'Supporting families through Ramadan, Eid, and seasonal charity initiatives.',
        image: seasonalGivingImg,
        imageAlt: 'Seasonal Giving',
        badge: 'Ramadan & Eid Support',
        heading: 'Bring hope through seasonal giving',
        body: 'Our Seasonal Giving program supports vulnerable families during Ramadan, Eid, and other important times of the year. Through food distributions, Qurbani programs, and community support, we help families celebrate with dignity and care.',
        checklist: [
            'Ramadan food distributions for families in need',
            'Eid support programs and community care',
            'Seasonal giving initiatives including Qurbani projects',
        ],
        sideCards: [
            { title: 'Ramadan Support', description: 'Providing food packs and support during the blessed month of Ramadan.', Icon: Moon },
            { title: 'Eid Giving', description: 'Helping families celebrate Eid with dignity, care, and essential support.', Icon: Gift },
            { title: 'Qurbani Programs', description: 'Delivering meat and food assistance to vulnerable communities.', Icon: HeartHandshake },
        ],
    },

    'sponsor-a-teacher': {
        heroTitle: 'Sponsor a Teacher',
        heroSubtitle: 'Empower Educators. Transform Futures.',
        image: sponsorTeacherImg,
        imageAlt: 'Sponsor a Teacher',
        badge: 'Teacher Support',
        heading: 'Your support strengthens the hands that shape the future',
        body: 'Our teachers are at the heart of every successful classroom. Your support helps us provide them with training, resources, and a stable environment so they can continue shaping young minds with dedication and passion.',
        checklist: [
            'Support teacher training and development',
            'Provide teaching resources and learning materials',
            'Encourage quality education in underserved communities',
        ],
        sideCards: [
            { title: 'Teacher Training & Development', description: 'Supporting educators with professional training and development opportunities.', Icon: GraduationCap },
            { title: 'Teaching Resources', description: 'Providing essential books, materials, and resources for effective teaching.', Icon: BookOpen },
            { title: 'Classroom Support', description: 'Helping teachers create supportive learning environments for their students.', Icon: Users },
        ],
    },

    'sponsor-a-widow': {
        heroTitle: 'Sponsor a Widow',
        heroSubtitle: 'Extend Compassion. Change a Life.',
        image: sponsorWidowImg,
        imageAlt: 'Sponsor a Widow',
        badge: 'Widow Support',
        heading: 'Your kindness today can bring stability and hope to a family in need',
        body: 'Many widows face immense challenges in providing for their families. Your support brings relief, dignity, and hope by helping them meet their basic needs and build a better future for themselves and their children.',
        checklist: [
            'Provide monthly financial assistance',
            'Support livelihood and skill development',
            'Offer hope, dignity, and a better tomorrow',
        ],
        sideCards: [
            { title: 'Financial Assistance', description: 'Providing essential financial support to help widows meet their families\u2019 basic needs.', Icon: HandCoins },
            { title: 'Livelihood Support', description: 'Creating opportunities for skills development and sustainable income.', Icon: Briefcase },
            { title: 'Family Support', description: 'Helping widows build secure, dignified, and independent lives for their families.', Icon: Users },
        ],
    },

    'sponsor-a-student': {
        heroTitle: 'Sponsor a Student',
        heroSubtitle: 'Invest in Education. Build a Better Tomorrow.',
        image: sponsorStudentImg,
        imageAlt: 'Sponsor a Student',
        badge: 'Student Support',
        heading: 'Your support today can shape a brighter future for a student',
        body: 'Education has the power to break the cycle of poverty and create lasting change. Your sponsorship helps students continue their studies, achieve their dreams, and become confident, contributing members of society.',
        checklist: [
            'Cover tuition fees and educational expenses',
            'Provide books, uniforms, and learning supplies',
            'Help students achieve their academic goals',
        ],
        sideCards: [
            { title: 'Educational Support', description: 'Helping students access quality education and continue their studies.', Icon: GraduationCap },
            { title: 'Learning Materials', description: 'Providing essential books, uniforms, and supplies for learning.', Icon: BookOpen },
            { title: 'Student Development', description: 'Supporting students in achieving their academic goals and building a brighter future.', Icon: Users },
        ],
    },
};

export default programsData;