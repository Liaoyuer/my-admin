const fileExport = file => () => import("@/components/" + file + ".vue")

export default fileExport
