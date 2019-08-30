export function getColorData({
  primary,
  dark = "#111",
  darkAlt = "#222",
  neutral = "#fff",
  neutralAlt = "#EFEFEF"
}) {
  return [
    {
      id: "light",
      label: "Light",
      start: neutral,
      end: neutral
    },
    {
      id: "lightAlt",
      label: "Light / Alt",
      start: neutral,
      end: neutralAlt
    },
    {
      id: "lightPop",
      label: "Light / Pop",
      start: neutral,
      end: primary
    },
    {
      id: "pop",
      label: "Pop",
      start: primary,
      end: primary
    },
    {
      id: "darkPop",
      label: "Dark / Pop",
      start: primary,
      end: dark
    },
    {
      id: "darkAlt",
      label: "Dark / alt",
      start: darkAlt,
      end: dark
    },
    {
      id: "dark",
      label: "Dark",
      start: dark,
      end: dark
    }
  ];
}
