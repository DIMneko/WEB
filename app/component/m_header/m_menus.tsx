// モジュールの順番がEslintでアルファベット順　ルールを適応しているため
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CottageIcon from "@mui/icons-material/Cottage";


// 2. 内部モジュールのインポート (プロジェクト内モジュール)
import Image001 from "@/app/assets/image/sample001.png";
import Image002 from "@/app/assets/image/sample002.png";
import Image003 from "@/app/assets/image/sample003.png";
import Image004 from "@/app/assets/image/sample004.png";
import Image005 from "@/app/assets/image/sample005.png";


export const M_menus = [
  {
    label: "Home",
    icon: <CottageIcon />,
    link: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    URL: Image001.src,
  },
  {
    label: "Books",
    icon: <AutoStoriesIcon />,
    link: `/Books`,
    URL: Image002.src,
  },
  {
    label: "Blog",
    icon: <CalendarMonthIcon />,
    link: `/Blog`,
    URL: Image003.src,
  },
  {
    label: "Gallery",
    icon: <CameraAltIcon />,
    link: `/Gallery`,
    URL: Image004.src,
  },
  {
    label: "Contact",
    icon: <ContactMailIcon />,
    link: `/Contact`,
    URL: Image005.src,
  },
];