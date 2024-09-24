import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export const SideMenus = [
  {
    name: "備忘録",
    icon: <AutoStoriesIcon />,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/Blog`,
  },
  {
    name: "お気に入り",
    icon: <CalendarMonthIcon />,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/Books`,
  },
  {
    name: "ギャラリー",
    icon: <CameraAltIcon />,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/Gallery`,
  },
];
