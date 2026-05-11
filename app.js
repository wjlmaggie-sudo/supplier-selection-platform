const LOGIN_USER = "admin";
const LOGIN_PASSWORD = "supplier2026";
const STORAGE_KEY = "supplierChoiceCustomSuppliers";
const APPROVAL_STORAGE_KEY = "supplierChoiceApprovalSnapshots";
const SESSION_KEY = "supplierChoiceLoggedIn";
const SIDEBAR_STORAGE_KEY = "supplierChoiceSidebarCollapsed";

const packagingTypes = [
  { sap: "GB", description: "GITTERBOX EU 1240X830X970 METALL", typeOfBox: "GB", group: "GLT", tme: "TME-G-000001" },
  { sap: "GI", description: "SET GITTERBOX OFFEN MIT INLAY", typeOfBox: "GB", group: "GLT", tme: "TME-G-000002" },
  { sap: "GO", description: "GITTERBOX EU 1240X830X970 OFFEN METALL", typeOfBox: "GB", group: "GLT", tme: "TME-G-000002" },
  { sap: "1I", description: "SET K1-BEHALTER MIT INLAY", typeOfBox: "K1", group: "KLT", tme: "TME-K-000001" },
  { sap: "1V", description: "SET K1-BEHALTER MIT 4 EINSATZBEHATER", typeOfBox: "K1", group: "KLT", tme: "TME-K-000001" },
  { sap: "K1", description: "KISTE K1 600X400X120 KUNSTSTOFF", typeOfBox: "K1", group: "KLT", tme: "TME-K-000001" },
  { sap: "2I", description: "SET K2-BEHALTER MIT INLAY", typeOfBox: "K2", group: "KLT", tme: "TME-K-000002" },
  { sap: "2V", description: "SET K2-BEHALTER MIT 4 EINSATZBEHATER", typeOfBox: "K2", group: "KLT", tme: "TME-K-000002" },
  { sap: "K2", description: "KISTE K2 600X400X220 KUNSTSTOFF", typeOfBox: "K2", group: "KLT", tme: "TME-K-000002" },
  { sap: "3I", description: "SET K3-BEHALTER MIT INLAY", typeOfBox: "K3", group: "KLT", tme: "TME-K-000003" },
  { sap: "K3", description: "KISTE K3 600X400X320 KUNSTSTOFF", typeOfBox: "K3", group: "KLT", tme: "TME-K-000003" },
  { sap: "4I", description: "SET K4-BEHALTER MIT INLAY", typeOfBox: "K4", group: "KLT", tme: "TME-K-000004" },
  { sap: "K4", description: "KISTE K4 600X400X480, RAHMEN, KUNSTSTOFF", typeOfBox: "K4", group: "KLT", tme: "TME-K-000004" },
  { sap: "5I", description: "KISTE K5 M. INLAY", typeOfBox: "FB", group: "GLT", tme: "TME-K-000005" },
  { sap: "K5", description: "KISTE K5 800X600X320 KUNSTSTOFF", typeOfBox: "K5", group: "GLT", tme: "TME-K-000005" },
  { sap: "K6", description: "KISTE 2H 400X300X220 KUNSTSTOFF", typeOfBox: "K6", group: "KLT", tme: "TME-K-000006" },
  { sap: "K7", description: "KISTE 2H 400X300X270, RAHMEN, KUNSTSTOFF", typeOfBox: "K7", group: "KLT", tme: "TME-K-000007" },
  { sap: "K8", description: "KISTE K8 300X200X117 KUNSTSTOFF", typeOfBox: "K8", group: "KLT", tme: "TME-K-000008" },
  { sap: "K9", description: "KISTE K9 400X300X120 KUNSTSTOFF", typeOfBox: "K9", group: "KLT", tme: "TME-K-000009" },
  { sap: "1A", description: "SET PAL. P1, AUFST.RAHMEN, DECK, HOLZ", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000001" },
  { sap: "1G", description: "SET PAL. P1, AUFST.RAHMEN HOLZ", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000001" },
  { sap: "P1", description: "PALETTE EU 1200X800X145 HOLZ", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000001" },
  { sap: "3A", description: "SET PAL. P3, AUFST.RAHMEN, DECKEL KU", typeOfBox: "EUPH", group: "GLT", tme: "TME-P-000003" },
  { sap: "3G", description: "SET PAL. P3, AUFST.RAHMEN KU", typeOfBox: "EUPH", group: "GLT", tme: "TME-P-000003" },
  { sap: "P3", description: "PALETTE EU H 800X600X165 KU", typeOfBox: "EUPH", group: "GLT", tme: "TME-P-000003" },
  { sap: "5A", description: "SET PAL. P5, AUFST.RAHMEN, DECKEL KU", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000005" },
  { sap: "5G", description: "SET PAL. P5, AUFST.RAHMEN KU", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000005" },
  { sap: "P5", description: "PALETTE EU 1200X800X165 KU", typeOfBox: "EUP", group: "GLT", tme: "TME-P-000005" },
  { sap: "FB", description: "SET PAL. FB, AUFSTECKRING, DECKEL KU", typeOfBox: "GB", group: "GLT", tme: "TME-S-000030" },
];

const translations = {
  zh: {
    platform: "Supplier Choice",
    title: "供应商选择平台",
    secureAccess: "Secure access",
    loginTitle: "供应商平台登录",
    username: "用户名",
    password: "密码",
    login: "登录",
    logout: "退出登录",
    collapseFilters: "收起",
    expandFilters: "展开",
    loginError: "用户名或密码不正确",
    language: "语言",
    material: "物料名称",
    region: "区域",
    incoterms: "Incoterms",
    supplier: "供应商名字",
    weightTitle: "选择维度权重",
    reset: "重置",
    priceWeight: "总单价",
    leadTimeWeight: "物流/件",
    qualityWeight: "材料单价",
    serviceWeight: "CO2",
    riskWeight: "MOQ",
    supplierSetup: "Supplier setup",
    decisionPage: "决策页",
    analysisPage: "分析页",
    recordsPage: "数据记录",
    bestUnitCost: "推荐总单价",
    priceTrend: "物料价格趋势",
    supplierCooperation: "供应商合作追踪",
    allRecords: "所有供应商数据记录",
    saveData: "保存数据",
    pasteMaterial: "粘贴/搜索物料号",
    batchUpload: "批量上传",
    excelUploadTitle: "上传 Excel/CSV 供应商数据",
    excelUploadHint: "建议使用模板字段，一次上传多个物料和供应商。",
    uploadExcel: "上传Excel",
    uploadNeedsCsv: "当前浏览器版已支持 CSV/TSV 批量导入；.xlsx 模板解析将在下一步接入。",
    importedRows: "已导入 {count} 条数据",
    approvalSave: "保存",
    approvalSaved: "审批版已保存",
    print: "打印",
    weightPerPiece: "单件重量",
    packagingType: "包装类型",
    amountPerBin: "每PV数量",
    packingPerPallet: "优化后每运输容器数量",
    repackCostPerContainer: "包装操作/容器",
    seaCost: "海运/LKW每MOQ",
    airCost: "空运/Flash每MOQ",
    co2Sea: "CO2每MOQ",
    co2Air: "CO2空运",
    unitCostChart: "总单价对比",
    costStructureChart: "成本结构",
    co2CostChart: "CO2 / 成本",
    aiInsights: "AI 视角",
    addSupplierTitle: "供应商录入",
    showAddSupplier: "添加供应商",
    hideAddSupplier: "收起表单",
    clearCustom: "清空新增",
    currency: "货币",
    saveSupplier: "保存供应商",
    saved: "已保存",
    cleared: "已清空新增供应商",
    decisionDesk: "Decision desk",
    summaryTitle: "Supplier decision cockpit for transparent ToCo comparison",
    matchedSuppliers: "匹配供应商",
    bestScore: "最低总单价",
    recommended: "推荐选择",
    points: "分",
    comparison: "Comparison",
    supplierTable: "供应商 ToCo 对比表",
    export: "导出CSV",
    score: "评分",
    price: "总单价/件",
    leadTime: "物流成本/件",
    quality: "材料单价",
    risk: "CO2/年",
    details: "Details",
    payment: "付款条件",
    capacity: "Forecast",
    moq: "MOQ",
    sustainability: "可持续性",
    unitCostBreakdown: "单价=100成本占比",
    annualCostBreakdown: "年度成本拆分",
    materialCost: "材料成本",
    logisticsCost: "物流成本",
    totalCost: "总成本",
    transportCost: "运输",
    storageCost: "库存",
    handlingCost: "Handling",
    repackCost: "Repack",
    customsCost: "关税",
    warehouseCost: "高架仓储",
    oneTimeCost: "一次性物流成本",
    airFreightCost: "空运/Flash",
    all: "全部",
    searchPlaceholder: "搜索供应商",
    days: "天",
    units: "件",
    low: "低",
    medium: "中",
    high: "高",
    reason:
      "{supplier} 在当前筛选条件下总单价最低。平台使用 Excel 的 ToCo 逻辑：总单价/件 = 材料单价 + 物流成本/件，并把总单价拆成单价=100时的成本占比。",
    recommendationInsight:
      "{supplier} 当前是推荐选择。AI 视角建议同时检查：总单价是否形成商业基准、物流/件是否可通过包装和运输优化进一步下降，以及 CO2/政策风险是否会影响长期供货稳定性。",
    insightCheapest: "{supplier} 当前总单价最低，适合作为商业基准。",
    insightLogistics: "{supplier} 物流/件最低，适合关注包装、运输和库存效率。",
    insightCo2: "{supplier} CO2 较低，适合纳入可持续和潜在碳政策风险视角。",
    insightPolicy: "AI 可以进一步接入实时政策、关税、红海/港口、碳边境调节等外部信息，给出动态风险提示。",
    noData: "没有匹配的供应商，请调整筛选条件。",
    csvName: "供应商选择结果.csv",
  },
  en: {
    platform: "Supplier Choice",
    title: "Supplier Selection Platform",
    secureAccess: "Secure access",
    loginTitle: "Supplier platform login",
    username: "Username",
    password: "Password",
    login: "Log in",
    logout: "Log out",
    collapseFilters: "Collapse",
    expandFilters: "Open",
    loginError: "Incorrect username or password",
    language: "Language",
    material: "Material",
    region: "Region",
    incoterms: "Incoterms",
    supplier: "Supplier",
    weightTitle: "Decision weights",
    reset: "Reset",
    priceWeight: "Total unit cost",
    leadTimeWeight: "Logistics/pc",
    qualityWeight: "Material cost",
    serviceWeight: "CO2",
    riskWeight: "MOQ",
    supplierSetup: "Supplier setup",
    decisionPage: "Decision",
    analysisPage: "Analysis",
    recordsPage: "Records",
    bestUnitCost: "Recommended total/pc",
    priceTrend: "Material price trend",
    supplierCooperation: "Supplier cooperation",
    allRecords: "All supplier records",
    saveData: "Save data",
    pasteMaterial: "Paste/search material",
    batchUpload: "Batch upload",
    excelUploadTitle: "Upload Excel/CSV supplier data",
    excelUploadHint: "Use the template fields to upload many materials and suppliers at once.",
    uploadExcel: "Upload Excel",
    uploadNeedsCsv: "This browser version supports CSV/TSV import now; .xlsx template parsing can be added next.",
    importedRows: "{count} rows imported",
    approvalSave: "Save",
    approvalSaved: "Approval pack saved",
    print: "Print",
    weightPerPiece: "Weight/pc",
    packagingType: "Packaging type",
    amountPerBin: "Qty/PV",
    packingPerPallet: "Optimized qty/transport box",
    repackCostPerContainer: "Repack/container",
    seaCost: "Sea/LKW per MOQ",
    airCost: "Air/Flash per MOQ",
    co2Sea: "CO2 per MOQ",
    co2Air: "CO2 air",
    unitCostChart: "Total unit cost",
    costStructureChart: "Cost structure",
    co2CostChart: "CO2 / cost",
    aiInsights: "AI insights",
    addSupplierTitle: "Supplier input",
    showAddSupplier: "Add supplier",
    hideAddSupplier: "Hide form",
    clearCustom: "Clear added",
    currency: "Currency",
    saveSupplier: "Save supplier",
    saved: "Saved",
    cleared: "Added suppliers cleared",
    decisionDesk: "Decision desk",
    summaryTitle: "Supplier decision cockpit for transparent ToCo comparison",
    matchedSuppliers: "Matched suppliers",
    bestScore: "Lowest unit cost",
    recommended: "Recommended choice",
    points: "pts",
    comparison: "Comparison",
    supplierTable: "Supplier ToCo comparison table",
    export: "Export CSV",
    score: "Score",
    price: "Total/pc",
    leadTime: "Logistics/pc",
    quality: "Material/pc",
    risk: "CO2/year",
    details: "Details",
    payment: "Payment term",
    capacity: "Forecast",
    moq: "MOQ",
    sustainability: "Sustainability",
    unitCostBreakdown: "Cost share if unit price = 100",
    annualCostBreakdown: "Annual cost breakdown",
    materialCost: "Material cost",
    logisticsCost: "Logistics cost",
    totalCost: "Total cost",
    transportCost: "Transport",
    storageCost: "Inventory",
    handlingCost: "Handling",
    repackCost: "Repack",
    customsCost: "Customs",
    warehouseCost: "High-bay storage",
    oneTimeCost: "One-time logistics",
    airFreightCost: "Air/Flash",
    all: "All",
    searchPlaceholder: "Search supplier",
    days: "days",
    units: "units",
    low: "Low",
    medium: "Medium",
    high: "High",
    reason:
      "{supplier} has the lowest total unit cost under the current filters. The platform follows the Excel ToCo logic: total unit cost = material unit cost + logistics cost per piece, then shows each cost component as a share of a unit price of 100.",
    recommendationInsight:
      "{supplier} is the recommended choice. From an AI perspective, also review whether the total unit cost is a strong commercial benchmark, whether logistics per piece can be improved through packaging and transport, and whether CO2 or policy risks may affect long-term supply stability.",
    insightCheapest: "{supplier} has the lowest total unit cost and is a useful commercial benchmark.",
    insightLogistics: "{supplier} has the lowest logistics cost per piece, so it is worth checking packaging, transport, and inventory efficiency.",
    insightCo2: "{supplier} has lower CO2 exposure and can be reviewed from sustainability and carbon-policy risk angles.",
    insightPolicy: "AI can later connect to live policy, tariff, port disruption, and carbon-border information to provide dynamic risk prompts.",
    noData: "No suppliers match the current filters.",
    csvName: "supplier-selection-results.csv",
  },
  de: {
    platform: "Supplier Choice",
    title: "Lieferantenauswahl",
    secureAccess: "Secure access",
    loginTitle: "Login Lieferantenplattform",
    username: "Benutzername",
    password: "Passwort",
    login: "Anmelden",
    logout: "Abmelden",
    collapseFilters: "Einklappen",
    expandFilters: "Öffnen",
    loginError: "Benutzername oder Passwort ist falsch",
    language: "Sprache",
    material: "Material",
    region: "Region",
    incoterms: "Incoterms",
    supplier: "Lieferant",
    weightTitle: "Entscheidungsgewichte",
    reset: "Zurücksetzen",
    priceWeight: "Gesamtkosten/Stk.",
    leadTimeWeight: "Logistik/Stk.",
    qualityWeight: "Materialkosten",
    serviceWeight: "CO2",
    riskWeight: "MOQ",
    supplierSetup: "Supplier setup",
    decisionPage: "Entscheidung",
    analysisPage: "Analyse",
    recordsPage: "Datensätze",
    bestUnitCost: "Empf. Gesamt/Stk.",
    priceTrend: "Materialpreistrend",
    supplierCooperation: "Lieferantenverfolgung",
    allRecords: "Alle Lieferantendaten",
    saveData: "Daten speichern",
    pasteMaterial: "Material einfügen/suchen",
    batchUpload: "Batch-Upload",
    excelUploadTitle: "Excel/CSV-Lieferantendaten hochladen",
    excelUploadHint: "Mit Template-Feldern mehrere Materialien und Lieferanten auf einmal hochladen.",
    uploadExcel: "Excel hochladen",
    uploadNeedsCsv: "Diese Browser-Version unterstützt CSV/TSV-Import; .xlsx-Template-Parsing kann als nächstes ergänzt werden.",
    importedRows: "{count} Zeilen importiert",
    approvalSave: "Speichern",
    approvalSaved: "Freigabeversion gespeichert",
    print: "Drucken",
    weightPerPiece: "Gewicht/Stk.",
    packagingType: "Verpackungstyp",
    amountPerBin: "Menge/PV",
    packingPerPallet: "Optimierte Menge/Transportbehälter",
    repackCostPerContainer: "Umpacken/Behälter",
    seaCost: "See/LKW je MOQ",
    airCost: "Luft/Flash je MOQ",
    co2Sea: "CO2 je MOQ",
    co2Air: "CO2 Luft",
    unitCostChart: "Gesamtkosten/Stk.",
    costStructureChart: "Kostenstruktur",
    co2CostChart: "CO2 / Kosten",
    aiInsights: "KI-Perspektive",
    addSupplierTitle: "Lieferanteneingabe",
    showAddSupplier: "Lieferant hinzufügen",
    hideAddSupplier: "Formular einklappen",
    clearCustom: "Hinzugefügte löschen",
    currency: "Währung",
    saveSupplier: "Lieferant speichern",
    saved: "Gespeichert",
    cleared: "Hinzugefügte Lieferanten gelöscht",
    decisionDesk: "Decision desk",
    summaryTitle: "Supplier decision cockpit for transparent ToCo comparison",
    matchedSuppliers: "Passende Lieferanten",
    bestScore: "Niedrigste Stückkosten",
    recommended: "Empfehlung",
    points: "Pkt.",
    comparison: "Comparison",
    supplierTable: "ToCo-Lieferantenvergleich",
    export: "CSV exportieren",
    score: "Bewertung",
    price: "Gesamt/Stk.",
    leadTime: "Logistik/Stk.",
    quality: "Material/Stk.",
    risk: "CO2/Jahr",
    details: "Details",
    payment: "Zahlungsbedingung",
    capacity: "Forecast",
    moq: "MOQ",
    sustainability: "Nachhaltigkeit",
    unitCostBreakdown: "Kostenanteil bei Stückpreis = 100",
    annualCostBreakdown: "Jahreskostenaufschlüsselung",
    materialCost: "Materialkosten",
    logisticsCost: "Logistikkosten",
    totalCost: "Gesamtkosten",
    transportCost: "Transport",
    storageCost: "Bestand",
    handlingCost: "Handling",
    repackCost: "Umpacken",
    customsCost: "Zoll",
    warehouseCost: "Hochregallager",
    oneTimeCost: "Einmalige Logistik",
    airFreightCost: "Luft/Flash",
    all: "Alle",
    searchPlaceholder: "Lieferant suchen",
    days: "Tage",
    units: "Stück",
    low: "Niedrig",
    medium: "Mittel",
    high: "Hoch",
    reason:
      "{supplier} hat unter den aktuellen Filtern die niedrigsten Gesamtkosten pro Stück. Die Plattform folgt der Excel-ToCo-Logik: Gesamtkosten/Stk. = Materialkosten/Stk. + Logistikkosten/Stk.; anschließend werden die Kostenbestandteile als Anteil eines Stückpreises von 100 gezeigt.",
    recommendationInsight:
      "{supplier} ist die empfohlene Auswahl. Aus KI-Perspektive sollten zusätzlich die kommerzielle Benchmark der Stückkosten, mögliche Logistikoptimierung über Verpackung und Transport sowie CO2- oder Policy-Risiken für die langfristige Versorgung geprüft werden.",
    insightCheapest: "{supplier} hat aktuell die niedrigsten Gesamtkosten pro Stück und eignet sich als kommerzielle Benchmark.",
    insightLogistics: "{supplier} hat die niedrigsten Logistikkosten pro Stück; Verpackung, Transport und Bestand sollten dort genauer geprüft werden.",
    insightCo2: "{supplier} hat eine niedrigere CO2-Belastung und eignet sich für Nachhaltigkeits- und Carbon-Policy-Risiken.",
    insightPolicy: "KI kann später Echtzeitdaten zu Politik, Zöllen, Häfen und Carbon Border Themen einbeziehen und dynamische Risikohinweise geben.",
    noData: "Keine Lieferanten entsprechen den aktuellen Filtern.",
    csvName: "lieferantenauswahl-ergebnis.csv",
  },
};

const state = {
  language: "zh",
  sortKey: "decisionScore",
  sortDirection: "desc",
  selectedSupplierId: null,
  supplierFormOpen: false,
  activePage: "decision",
  defaultMaterialApplied: false,
  authenticated: sessionStorage.getItem(SESSION_KEY) === "true",
  sidebarCollapsed: localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true",
};

let baseSuppliers = [];
let customSuppliers = loadCustomSuppliers();
let suppliers = [];

const controls = {
  loginScreen: document.querySelector("#loginScreen"),
  appShell: document.querySelector("#appShell"),
  loginForm: document.querySelector("#loginForm"),
  usernameInput: document.querySelector("#usernameInput"),
  passwordInput: document.querySelector("#passwordInput"),
  loginError: document.querySelector("#loginError"),
  logoutButton: document.querySelector("#logoutButton"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  languageSelect: document.querySelector("#languageSelect"),
  materialFilter: document.querySelector("#materialFilter"),
  materialPaste: document.querySelector("#materialPaste"),
  regionFilter: document.querySelector("#regionFilter"),
  incotermFilter: document.querySelector("#incotermFilter"),
  supplierSearch: document.querySelector("#supplierSearch"),
  supplierRows: document.querySelector("#supplierRows"),
  recordRows: document.querySelector("#recordRows"),
  cooperationRows: document.querySelector("#cooperationRows"),
  unitCostChart: document.querySelector("#unitCostChart"),
  costStructureChart: document.querySelector("#costStructureChart"),
  priceTrendChart: document.querySelector("#priceTrendChart"),
  supplierCooperationChart: document.querySelector("#supplierCooperationChart"),
  decisionPage: document.querySelector("#decisionPage"),
  analysisPage: document.querySelector("#analysisPage"),
  recordsPage: document.querySelector("#recordsPage"),
  decisionTab: document.querySelector("#decisionTab"),
  analysisTab: document.querySelector("#analysisTab"),
  recordsTab: document.querySelector("#recordsTab"),
  recommendedCost: document.querySelector("#recommendedCost"),
  recommendedSupplier: document.querySelector("#recommendedSupplier"),
  recommendationReason: document.querySelector("#recommendationReason"),
  approvalSave: document.querySelector("#approvalSave"),
  approvalExport: document.querySelector("#approvalExport"),
  approvalPrint: document.querySelector("#approvalPrint"),
  approvalNotice: document.querySelector("#approvalNotice"),
  exportCsv: document.querySelector("#exportCsv"),
  saveData: document.querySelector("#saveData"),
  resetWeights: document.querySelector("#resetWeights"),
  toggleSupplierForm: document.querySelector("#toggleSupplierForm"),
  supplierForm: document.querySelector("#supplierForm"),
  clearCustomSuppliers: document.querySelector("#clearCustomSuppliers"),
  savedNotice: document.querySelector("#savedNotice"),
  formMaterial: document.querySelector("#formMaterial"),
  formSupplier: document.querySelector("#formSupplier"),
  formRegion: document.querySelector("#formRegion"),
  formIncoterm: document.querySelector("#formIncoterm"),
  formCurrency: document.querySelector("#formCurrency"),
  formPrice: document.querySelector("#formPrice"),
  formLeadTime: document.querySelector("#formLeadTime"),
  formQuality: document.querySelector("#formQuality"),
  formService: document.querySelector("#formService"),
  formRisk: document.querySelector("#formRisk"),
  formPayment: document.querySelector("#formPayment"),
  formCapacity: document.querySelector("#formCapacity"),
  formMoq: document.querySelector("#formMoq"),
  formSustainability: document.querySelector("#formSustainability"),
  formShare: document.querySelector("#formShare"),
  formWeightPerPiece: document.querySelector("#formWeightPerPiece"),
  formPvForm: document.querySelector("#formPvForm"),
  formAmountPerBin: document.querySelector("#formAmountPerBin"),
  formPackingPerPallet: document.querySelector("#formPackingPerPallet"),
  formRepackCostPerContainer: document.querySelector("#formRepackCostPerContainer"),
  formSeaCost: document.querySelector("#formSeaCost"),
  formAirCost: document.querySelector("#formAirCost"),
  formCo2Sea: document.querySelector("#formCo2Sea"),
  formCo2Air: document.querySelector("#formCo2Air"),
  formOneTimeCost: document.querySelector("#formOneTimeCost"),
  excelUploadFile: document.querySelector("#excelUploadFile"),
};

const weightInputs = ["price", "leadTime", "quality", "service", "risk"].reduce(
  (acc, key) => {
    acc[key] = document.querySelector(`#${key}Weight`);
    acc[`${key}Value`] = document.querySelector(`#${key}WeightValue`);
    return acc;
  },
  {},
);

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value, currency = "EUR") {
  return `${currency} ${Number(value || 0).toFixed(2)}`;
}

function number(value, digits = 0) {
  return Number(value || 0).toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function loadCustomSuppliers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCustomSuppliers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customSuppliers));
}

function loadExcelSuppliers() {
  const records = Array.isArray(window.EMBEDDED_EXCEL_RECORDS)
    ? window.EMBEDDED_EXCEL_RECORDS
    : [];
  const newTcoRecords = Array.isArray(window.EMBEDDED_NEW_TCO_RECORDS)
    ? window.EMBEDDED_NEW_TCO_RECORDS
    : [];
  return [...records.map((record) => normalizeExcelRecord(record)), ...newTcoRecords];
}

function v(item, key) {
  return Number(item[key] || 0);
}

function normalizeExcelRecord(record) {
  const item = record.item;
  const materialPrice = v(item, "Materialpreis");
  const logisticsPerPiece = v(item, "Logistik-\nKosten/pcs.");
  const totalUnitCost = materialPrice + logisticsPerPiece;
  const forecast = v(item, "Forecast 4th year FY 2030");
  const adjustedForecast = forecast;
  const annualLogisticsCost = v(item, "Log,.-kosten\nArtikel p.a.");
  const annualCosts = {
    transport: v(item, "Transportkosten Gesamt"),
    seaFreight: v(item, 'SEE/LKW FRACHT Logistik Kosten\n- Transport - '),
    airFreight: v(
      item,
      "LUFTFRACHT/Flash\nLogistik Kosten\n- Transport - \n1x jährlich (Eskalation/ \nQ-Problem)",
    ),
    storage: v(item, "Lagerkosten"),
    handling: v(item, "Handlingskosten Logistik"),
    repack: v(item, "Umpackkosten\nDienstleister"),
    customs: v(item, "Zollkosten\nDienstleister"),
    warehouse: v(item, "Lagerung Hochregallager"),
    oneTime: v(item, "Einmalkosten erhöhter Log.-Aufwand nicht EU-Lieferant\n100€/70 Std."),
  };
  annualCosts.other = Math.max(
    0,
    annualLogisticsCost -
      (annualCosts.transport +
        annualCosts.storage +
        annualCosts.handling +
        annualCosts.repack +
        annualCosts.customs +
        annualCosts.warehouse +
        annualCosts.oneTime),
  );
  const packagingSap = item["PV-Form (UPA)"] || "-";
  const packaging = packagingTypes.find((entry) => entry.sap === packagingSap);

  return {
    id: `excel-${record.supplier}-${item["Mat.Nr."]}`,
    source: "excel",
    materialCode: item["Mat.Nr."],
    materialName: item.Bezeichnung,
    material: `${item["Mat.Nr."]} | ${item.Bezeichnung}`,
    supplier: record.supplier,
    region: record.location,
    incoterm: record.incoterm,
    price: totalUnitCost,
    totalUnitCost,
    materialPrice,
    logisticsPerPiece,
    annualLogisticsCost,
    annualCosts,
    adjustedForecast,
    currency: "EUR",
    forecast,
    leadTime: logisticsPerPiece,
    quality: materialPrice,
    service: v(
      item,
      "CO²-Emmision See/LKW lt. Archie-Tool in kg/p.a. (Standardlieferung)",
    ),
    risk: v(item, "MOQ Lieferant"),
    payment: "-",
    capacity: forecast,
    moq: v(item, "MOQ Lieferant"),
    packagingSap,
    packagingType: packaging?.typeOfBox || packagingSap,
    packagingDescription: packaging?.description || "",
    sustainability: Math.max(0, Math.round(100 - Math.min(100, v(item, "CO²-Emmision See/LKW lt. Archie-Tool in kg/p.a. (Standardlieferung)") / 2000))),
  };
}

function rebuildSuppliers() {
  suppliers = [...baseSuppliers, ...customSuppliers];
}

function uniqueValues(key) {
  return [...new Set(suppliers.map((item) => item[key]).filter(Boolean))].sort();
}

function fillSelect(select, values) {
  if (!select) return;
  const current = select.value;
  select.innerHTML = [
    `<option value="">${t("all")}</option>`,
    ...values.map(
      (value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`,
    ),
  ].join("");
  select.value = values.includes(current) ? current : "";
}

function getFilteredSuppliers() {
  const query = controls.supplierSearch.value.trim().toLowerCase();
  const regionValue = controls.regionFilter?.value || "";
  const incotermValue = controls.incotermFilter?.value || "";
  return suppliers.filter((item) => {
    return (
      (!controls.materialFilter.value ||
        item.material === controls.materialFilter.value) &&
      (!regionValue || item.region === regionValue) &&
      (!incotermValue || item.incoterm === incotermValue) &&
      (!query || item.supplier.toLowerCase().includes(query))
    );
  });
}

function sortRows(rows) {
  const direction = state.sortDirection === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    const aValue = a[state.sortKey];
    const bValue = b[state.sortKey];
    if (typeof aValue === "number") return (aValue - bValue) * direction;
    return String(aValue).localeCompare(String(bValue)) * direction;
  });
}

function getWeights() {
  const values = {
    totalUnitCost: Number(weightInputs.price.value),
    logisticsPerPiece: Number(weightInputs.leadTime.value),
    materialPrice: Number(weightInputs.quality.value),
    service: Number(weightInputs.service.value),
    moq: Number(weightInputs.risk.value),
  };
  const total = Object.values(values).reduce((sum, value) => sum + value, 0) || 1;
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, value / total]),
  );
}

function normalizeLower(value, min, max) {
  if (max === min) return 100;
  return ((max - value) / (max - min)) * 100;
}

function scoreSupplierSet(rows) {
  if (!rows.length) return [];
  const keys = ["totalUnitCost", "logisticsPerPiece", "materialPrice", "service", "moq"];
  const ranges = Object.fromEntries(
    keys.map((key) => {
      const values = rows.map((item) => Number(item[key] || 0));
      return [key, { min: Math.min(...values), max: Math.max(...values) }];
    }),
  );
  const weights = getWeights();
  return rows.map((item) => {
    const decisionScore = keys.reduce((sum, key) => {
      const range = ranges[key];
      return sum + normalizeLower(item[key] || 0, range.min, range.max) * weights[key];
    }, 0);
    return { ...item, decisionScore };
  });
}

function calculateTemplateTco(input) {
  const adjustedForecast = input.forecast * input.share;
  const repackProcesses = adjustedForecast / input.amountPerReusableBin;
  const repackCost = repackProcesses * input.repackCostPerContainer;
  const deliveriesPerYear = Math.round(adjustedForecast / input.supplierMoq);
  const eupConversionQuantity = input.amountPerReusableBin * input.eupMultiplier;
  const safetyStock = Math.ceil((adjustedForecast / 12) * input.safetyStockMonths);
  const safetyStockPallets = Math.ceil(safetyStock / eupConversionQuantity);
  const palletsPerMoq = input.supplierMoq / input.optimizedPackingPerPallet;
  const palletsYearlyForecast = adjustedForecast / input.optimizedPackingPerPallet;
  const palletWeight = input.optimizedPackingPerPallet * input.weightPerPiece + 25;
  const seaTransport = input.transportCostSeaPerMoq * deliveriesPerYear;
  const airTransport = input.transportCostAirPerMoq;
  const transportTotal = seaTransport + airTransport;
  const storage = adjustedForecast * input.materialPrice * 0.085 / 12 * input.safetyStockMonths;
  const handling = deliveriesPerYear * input.handlingCostPerDelivery;
  const customs = deliveriesPerYear * input.customsCostPerDelivery;
  const warehouse = safetyStockPallets * input.highBayDailyCostPerPallet * 365;
  const annualLogisticsCost =
    seaTransport +
    handling +
    storage +
    repackCost +
    customs +
    warehouse +
    input.oneTimeCost +
    airTransport;
  const logisticsPerPiece = adjustedForecast > 0 ? annualLogisticsCost / adjustedForecast : 0;

  return {
    adjustedForecast,
    palletsPerMoq,
    repackProcesses,
    deliveriesPerYear,
    safetyStock,
    safetyStockPallets,
    eupConversionQuantity,
    palletsYearlyForecast,
    palletWeight,
    logisticsPerPiece,
    annualLogisticsCost,
    annualCosts: {
      transport: transportTotal,
      seaFreight: seaTransport,
      airFreight: airTransport,
      storage,
      handling,
      repack: repackCost,
      customs,
      warehouse,
      oneTime: input.oneTimeCost,
      other: 0,
    },
  };
}

function renderRows(rows) {
  controls.supplierRows.innerHTML = rows
    .map((item) => {
      const selected = item.id === state.selectedSupplierId ? "is-selected" : "";
      return `
        <tr class="${selected}" data-supplier-id="${escapeHtml(item.id)}">
          <td><span class="score-pill">${Math.round(item.decisionScore || 0)}</span></td>
          <td>${escapeHtml(item.supplier)}</td>
          <td>${escapeHtml(item.region)}</td>
          <td>${escapeHtml(item.incoterm)}</td>
          <td>${number(item.moq)}</td>
          <td>${money(item.materialPrice, item.currency)}</td>
          <td>${money(item.logisticsPerPiece, item.currency)}</td>
          <td>${money(item.totalUnitCost, item.currency)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRecordRows(rows) {
  controls.recordRows.innerHTML = rows
    .map(
      (item) => `
        <tr data-supplier-id="${escapeHtml(item.id)}">
          <td>${escapeHtml(item.materialCode || "-")}</td>
          <td>${escapeHtml(item.materialName || item.material)}</td>
          <td>${escapeHtml(item.supplier)}</td>
          <td>${escapeHtml(item.region)}</td>
          <td>${escapeHtml(item.incoterm)}</td>
          <td>${escapeHtml(item.packagingSap || "-")}</td>
          <td>${money(item.totalUnitCost, item.currency)}</td>
          <td>${money(item.materialPrice, item.currency)}</td>
          <td>${money(item.logisticsPerPiece, item.currency)}</td>
          <td>${money(item.annualLogisticsCost, item.currency)}</td>
          <td>${money(item.annualCosts?.transport || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.storage || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.handling || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.repack || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.customs || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.warehouse || 0, item.currency)}</td>
          <td>${money(item.annualCosts?.oneTime || 0, item.currency)}</td>
          <td>${number(item.moq)}</td>
          <td>${number(item.forecast)}</td>
          <td>${number(item.service, 0)} kg</td>
        </tr>
      `,
    )
    .join("");
}

function renderAnalytics(rows) {
  const ranked = [...rows].sort((a, b) => a.totalUnitCost - b.totalUnitCost);
  const maxCost = Math.max(...ranked.map((item) => item.totalUnitCost), 1);
  controls.unitCostChart.innerHTML = ranked
    .map(
      (item) => `
        <div class="hbar-row">
          <span>${escapeHtml(item.supplier)}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width:${(item.totalUnitCost / maxCost) * 100}%"></div></div>
          <strong>${money(item.totalUnitCost, item.currency)}</strong>
        </div>
      `,
    )
    .join("");

  controls.costStructureChart.innerHTML = ranked
    .map((item) => {
      const material = item.totalUnitCost ? (item.materialPrice / item.totalUnitCost) * 100 : 0;
      const logistics = Math.max(0, 100 - material);
      return `
        <div class="stack-row">
          <span>${escapeHtml(item.supplier)}</span>
          <div class="stack-track">
            <div class="stack-material" style="width:${material}%"></div>
            <div class="stack-logistics" style="width:${logistics}%"></div>
          </div>
          <strong>${material.toFixed(0)}% / ${logistics.toFixed(0)}%</strong>
        </div>
      `;
    })
    .join("");

}

function getSelectedPackaging() {
  return (
    packagingTypes.find((item) => item.sap === controls.formPvForm.value) ||
    packagingTypes.find((item) => item.sap === "K1")
  );
}

function fillPackagingOptions() {
  controls.formPvForm.innerHTML = packagingTypes
    .map(
      (item) =>
        `<option value="${escapeHtml(item.sap)}">${escapeHtml(item.typeOfBox)} | ${escapeHtml(item.description)}</option>`,
    )
    .join("");
  controls.formPvForm.value = "K1";
  updatePackagingDescription();
}

function updatePackagingDescription() {
  const selected = getSelectedPackaging();
  if (!selected) return;
  if (selected.group === "KLT" && Number(controls.formRepackCostPerContainer.value || 0) === 5.58) {
    controls.formRepackCostPerContainer.value = 3.4;
  }
  if (selected.group === "GLT" && Number(controls.formRepackCostPerContainer.value || 0) === 3.4) {
    controls.formRepackCostPerContainer.value = 20.69;
  }
}

function summarizeBySupplier(rows) {
  const groups = new Map();
  rows.forEach((item) => {
    const current = groups.get(item.supplier) || {
      supplier: item.supplier,
      count: 0,
      totalUnitCost: 0,
      logisticsPerPiece: 0,
      service: 0,
      score: 0,
      currency: item.currency,
    };
    current.count += 1;
    current.totalUnitCost += item.totalUnitCost || 0;
    current.logisticsPerPiece += item.logisticsPerPiece || 0;
    current.service += item.service || 0;
    current.score += item.decisionScore || 0;
    groups.set(item.supplier, current);
  });
  return [...groups.values()].map((item) => ({
    ...item,
    totalUnitCost: item.totalUnitCost / item.count,
    logisticsPerPiece: item.logisticsPerPiece / item.count,
    service: item.service / item.count,
    score: item.score / item.count,
  }));
}

function renderAnalysis(currentRows, allRows) {
  const priceRows = [...currentRows].sort((a, b) => a.totalUnitCost - b.totalUnitCost);
  const maxCost = Math.max(...priceRows.map((item) => item.totalUnitCost), 1);
  controls.priceTrendChart.innerHTML = priceRows.length
    ? priceRows
        .map((item) => {
          const material = item.totalUnitCost
            ? (item.materialPrice / item.totalUnitCost) * 100
            : 0;
          const logistics = Math.max(0, 100 - material);
          return `
            <div class="trend-row">
              <div>
                <strong>${escapeHtml(item.supplier)}</strong>
                <span>${money(item.totalUnitCost, item.currency)}</span>
              </div>
              <div class="trend-track">
                <div class="trend-total" style="width:${(item.totalUnitCost / maxCost) * 100}%">
                  <span class="trend-material" style="width:${material}%"></span>
                  <span class="trend-logistics" style="width:${logistics}%"></span>
                </div>
              </div>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-text">${escapeHtml(t("noData"))}</p>`;

  const cooperationRows = summarizeBySupplier(scoreSupplierSet(allRows)).sort(
    (a, b) => b.score - a.score,
  );
  const maxScore = Math.max(...cooperationRows.map((item) => item.score), 1);
  controls.supplierCooperationChart.innerHTML = cooperationRows
    .slice(0, 8)
    .map(
      (item) => `
        <div class="cooperation-row">
          <span>${escapeHtml(item.supplier)}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width:${(item.score / maxScore) * 100}%"></div></div>
          <strong>${Math.round(item.score)}</strong>
        </div>
      `,
    )
    .join("");

  controls.cooperationRows.innerHTML = cooperationRows
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.supplier)}</td>
          <td>${number(item.count)}</td>
          <td>${money(item.totalUnitCost, item.currency)}</td>
          <td>${money(item.logisticsPerPiece, item.currency)}</td>
          <td>${number(item.service, 0)} kg</td>
        </tr>
      `,
    )
    .join("");
}

function chartColumn(label, value, max, currency = "EUR", mode = "money") {
  const height = max > 0 && value > 0 ? Math.max(4, (value / max) * 100) : 0;
  const display =
    mode === "percent"
      ? `${value >= 10 ? value.toFixed(1) : value.toFixed(2)}%`
      : money(value, currency);
  return `
    <div class="chart-column">
      <strong>${display}</strong>
      <div class="chart-track">
        <div class="chart-fill" style="height:${height}%"></div>
      </div>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderCostBreakdowns(item) {
  if (!item) {
    controls.unitCostBreakdown.innerHTML = "";
    controls.annualCostBreakdown.innerHTML = "";
    return;
  }

  const adjustedForecast = Math.max(
    Number(item.adjustedForecast || item.forecast || item.capacity || 0),
    1,
  );
  const unitCostRows = [
    [t("materialCost"), item.materialPrice],
    [t("transportCost"), (item.annualCosts?.transport || 0) / adjustedForecast],
    [t("storageCost"), (item.annualCosts?.storage || 0) / adjustedForecast],
    [t("handlingCost"), (item.annualCosts?.handling || 0) / adjustedForecast],
    [t("repackCost"), (item.annualCosts?.repack || 0) / adjustedForecast],
    [t("customsCost"), (item.annualCosts?.customs || 0) / adjustedForecast],
    [t("warehouseCost"), (item.annualCosts?.warehouse || 0) / adjustedForecast],
    [t("oneTimeCost"), (item.annualCosts?.oneTime || 0) / adjustedForecast],
    ["Other", (item.annualCosts?.other || 0) / adjustedForecast],
  ];
  const shareRows = unitCostRows.map(([label, value]) => [
    label,
    item.totalUnitCost > 0 ? (value / item.totalUnitCost) * 100 : 0,
  ]);
  const shareMax = Math.max(...shareRows.map((row) => row[1]), 1);
  controls.unitCostBreakdown.innerHTML = shareRows
    .map(([label, value]) => chartColumn(label, value, shareMax, item.currency, "percent"))
    .join("");

  const annualRows = [
    [t("transportCost"), item.annualCosts?.transport || 0],
    [t("storageCost"), item.annualCosts?.storage || 0],
    [t("handlingCost"), item.annualCosts?.handling || 0],
    [t("repackCost"), item.annualCosts?.repack || 0],
    [t("customsCost"), item.annualCosts?.customs || 0],
    [t("warehouseCost"), item.annualCosts?.warehouse || 0],
    [t("oneTimeCost"), item.annualCosts?.oneTime || 0],
    ["Other", item.annualCosts?.other || 0],
  ].filter((row) => row[1] > 0);
  const annualMax = Math.max(...annualRows.map((row) => row[1]), 1);
  controls.annualCostBreakdown.innerHTML = annualRows.length
    ? annualRows.map(([label, value]) => chartColumn(label, value, annualMax, item.currency)).join("")
    : chartColumn(t("logisticsCost"), item.annualLogisticsCost || 0, 1, item.currency);
}

function renderDetails(item) {
  return item;
}

function renderSummary(rows) {
  if (!rows.length) {
    controls.recommendedCost.textContent = "-";
    controls.recommendedSupplier.textContent = "-";
    controls.recommendationReason.textContent = t("noData");
    renderDetails(null);
    return;
  }

  const scoredRows = scoreSupplierSet(rows);
  const best = [...scoredRows].sort((a, b) => b.decisionScore - a.decisionScore)[0];
  controls.recommendedCost.textContent = money(best.totalUnitCost, best.currency);
  controls.recommendedSupplier.textContent = best.supplier;
  controls.recommendationReason.textContent = t("recommendationInsight").replace(
    "{supplier}",
    best.supplier,
  );

  if (!state.selectedSupplierId || !rows.some((item) => item.id === state.selectedSupplierId)) {
    state.selectedSupplierId = best.id;
  }
  renderDetails(rows.find((item) => item.id === state.selectedSupplierId));
}

function updateWeightLabels() {
  ["price", "leadTime", "quality", "service", "risk"].forEach((key) => {
    weightInputs[`${key}Value`].textContent = weightInputs[key].value;
  });
}

function updateAuthView() {
  controls.loginScreen.classList.toggle("is-hidden", state.authenticated);
  controls.appShell.classList.toggle("is-hidden", !state.authenticated);
}

function render() {
  document.documentElement.lang =
    state.language === "zh" ? "zh-CN" : state.language === "de" ? "de" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  controls.supplierSearch.placeholder = t("searchPlaceholder");
  controls.toggleSupplierForm.textContent = state.supplierFormOpen
    ? t("hideAddSupplier")
    : t("showAddSupplier");
  controls.supplierForm.classList.toggle("is-hidden", !state.supplierFormOpen);
  controls.decisionPage.classList.toggle("is-hidden", state.activePage !== "decision");
  controls.analysisPage.classList.toggle("is-hidden", state.activePage !== "analysis");
  controls.recordsPage.classList.toggle("is-hidden", state.activePage !== "records");
  controls.decisionTab.classList.toggle("is-active", state.activePage === "decision");
  controls.analysisTab.classList.toggle("is-active", state.activePage === "analysis");
  controls.recordsTab.classList.toggle("is-active", state.activePage === "records");
  controls.appShell.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  controls.sidebarToggle.textContent = state.sidebarCollapsed
    ? t("expandFilters")
    : t("collapseFilters");
  controls.sidebarToggle.setAttribute("aria-expanded", String(!state.sidebarCollapsed));

  fillSelect(controls.materialFilter, uniqueValues("material"));
  if (!state.defaultMaterialApplied && !controls.materialFilter.value) {
    controls.materialFilter.value = uniqueValues("material")[0] || "";
    state.defaultMaterialApplied = true;
  }
  fillSelect(controls.regionFilter, uniqueValues("region"));
  fillSelect(controls.incotermFilter, uniqueValues("incoterm"));
  updateWeightLabels();
  const rows = scoreSupplierSet(getFilteredSuppliers());
  const sortedRows = sortRows(rows);
  renderSummary(rows);
  renderRows(sortedRows);
  renderAnalytics(rows);
  renderAnalysis(rows, suppliers);
  renderRecordRows(sortRows(scoreSupplierSet(suppliers)));
  updateAuthView();
}

function exportCsv() {
  const rows = sortRows(scoreSupplierSet(getFilteredSuppliers()));
  const headers = [
    t("material"),
    t("supplier"),
    t("region"),
    t("incoterms"),
    t("price"),
    t("quality"),
    t("leadTime"),
    t("risk"),
  ];
  const csvRows = rows.map((item) => [
    item.material,
    item.supplier,
    item.region,
    item.incoterm,
    money(item.totalUnitCost, item.currency),
    money(item.materialPrice, item.currency),
    money(item.logisticsPerPiece, item.currency),
    `${number(item.service)} kg`,
  ]);
  const content = [headers, ...csvRows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${content}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = t("csvName");
  link.click();
  URL.revokeObjectURL(url);
}

function saveApprovalSnapshot() {
  const rows = sortRows(scoreSupplierSet(getFilteredSuppliers()));
  const best = [...rows].sort((a, b) => b.decisionScore - a.decisionScore)[0];
  const snapshots = JSON.parse(localStorage.getItem(APPROVAL_STORAGE_KEY) || "[]");
  snapshots.push({
    savedAt: new Date().toISOString(),
    material: controls.materialFilter.value || t("all"),
    region: controls.regionFilter?.value || t("all"),
    incoterm: controls.incotermFilter?.value || t("all"),
    recommendedSupplier: best?.supplier || "-",
    recommendedCost: best ? money(best.totalUnitCost, best.currency) : "-",
    rowCount: rows.length,
    rows,
  });
  localStorage.setItem(APPROVAL_STORAGE_KEY, JSON.stringify(snapshots));
  controls.approvalNotice.textContent = t("approvalSaved");
  controls.savedNotice.textContent = t("approvalSaved");
}

function printDecision() {
  window.print();
}

function readNumber(input, fallback = 0) {
  if (!input) return fallback;
  const value = Number(String(input.value).replace(",", "."));
  return Number.isFinite(value) ? value : fallback;
}

function resetSupplierForm() {
  controls.supplierForm.reset();
  if (controls.formQuality) controls.formQuality.value = 85;
  if (controls.formService) controls.formService.value = 85;
  if (controls.formRisk) controls.formRisk.value = 20;
  controls.formCapacity.value = 0;
  controls.formMoq.value = 0;
  if (controls.formSustainability) controls.formSustainability.value = 75;
  controls.formOneTimeCost.value = 0;
  controls.formPvForm.value = "K1";
  updatePackagingDescription();
}

function addSupplier(event) {
  event.preventDefault();
  const materialPrice = readNumber(controls.formPrice);
  const forecast = readNumber(controls.formCapacity);
  const selectedPackaging = getSelectedPackaging();
  const eupMultiplier = selectedPackaging?.group === "KLT" ? 32 : 2;
  const tco = calculateTemplateTco({
    forecast,
    share: readNumber(controls.formShare, 1),
    weightPerPiece: readNumber(controls.formWeightPerPiece, 0.1),
    materialPrice,
    supplierMoq: readNumber(controls.formMoq, 1),
    amountPerReusableBin: readNumber(controls.formAmountPerBin, 1),
    eupMultiplier,
    optimizedPackingPerPallet: readNumber(controls.formPackingPerPallet, 1),
    repackCostPerContainer: readNumber(controls.formRepackCostPerContainer, 5.58),
    transportCostSeaPerMoq: readNumber(controls.formSeaCost),
    transportCostAirPerMoq: readNumber(controls.formAirCost),
    safetyStockMonths: 4,
    handlingCostPerDelivery: 120,
    customsCostPerDelivery: 15.27,
    highBayDailyCostPerPallet: 0.071,
    oneTimeCost: readNumber(controls.formOneTimeCost),
  });
  const logisticsPerPiece = tco.logisticsPerPiece;
  const co2 =
    readNumber(controls.formCo2Sea) * (tco.deliveriesPerYear || 0) +
    readNumber(controls.formCo2Air);
  const supplier = {
    id: `custom-${Date.now()}`,
    source: "custom",
    materialCode: controls.formMaterial.value.trim(),
    materialName: controls.formMaterial.value.trim(),
    material: controls.formMaterial.value.trim(),
    supplier: controls.formSupplier.value.trim(),
    region: controls.formRegion.value.trim(),
    incoterm: controls.formIncoterm.value,
    price: materialPrice + logisticsPerPiece,
    totalUnitCost: materialPrice + logisticsPerPiece,
    materialPrice,
    logisticsPerPiece,
    annualLogisticsCost: tco.annualLogisticsCost || logisticsPerPiece * forecast,
    annualCosts: tco.annualCosts,
    adjustedForecast: tco.adjustedForecast || forecast,
    currency: controls.formCurrency.value,
    forecast,
    leadTime: logisticsPerPiece,
    quality: materialPrice,
    service: co2 || readNumber(controls.formService),
    risk: readNumber(controls.formMoq),
    payment: controls.formPayment?.value.trim() || "-",
    capacity: forecast,
    moq: readNumber(controls.formMoq),
    packagingSap: selectedPackaging?.sap || controls.formPvForm.value,
    packagingType: selectedPackaging?.typeOfBox || controls.formPvForm.value,
    packagingDescription: selectedPackaging?.description || "",
    sustainability: readNumber(controls.formSustainability, 75),
  };

  customSuppliers.push(supplier);
  saveCustomSuppliers();
  rebuildSuppliers();
  state.selectedSupplierId = supplier.id;
  controls.materialFilter.value = supplier.material;
  if (controls.regionFilter) controls.regionFilter.value = "";
  if (controls.incotermFilter) controls.incotermFilter.value = "";
  controls.supplierSearch.value = "";
  resetSupplierForm();
  controls.savedNotice.textContent = t("saved");
  render();
}

function clearCustomSuppliers() {
  customSuppliers = [];
  saveCustomSuppliers();
  rebuildSuppliers();
  state.selectedSupplierId = null;
  controls.savedNotice.textContent = t("cleared");
  render();
}

function supplierFromPastedCells(cells) {
  const [
    materialCode,
    materialName,
    supplierName,
    region,
    incoterm,
    totalUnit,
    materialPrice,
    logisticsPerPiece,
    moq,
    forecast,
    oneTimeCost,
  ] = cells;
  const material = [materialCode, materialName].filter(Boolean).join(" | ");
  const materialCost = Number(String(materialPrice || 0).replace(",", "."));
  const logisticsCost = Number(String(logisticsPerPiece || 0).replace(",", "."));
  const totalCost =
    Number(String(totalUnit || 0).replace(",", ".")) || materialCost + logisticsCost;
  const forecastValue = Number(String(forecast || 0).replace(",", "."));
  return {
    id: `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    source: "custom",
    materialCode: materialCode || materialName || "Manual",
    materialName: materialName || materialCode || "Manual material",
    material: material || materialName || materialCode || "Manual material",
    supplier: supplierName || "Manual supplier",
    region: region || "-",
    incoterm: incoterm || "-",
    price: totalCost,
    totalUnitCost: totalCost,
    materialPrice: materialCost,
    logisticsPerPiece: logisticsCost,
    annualLogisticsCost:
      logisticsCost * forecastValue + Number(String(oneTimeCost || 0).replace(",", ".")),
    annualCosts: {
      oneTime: Number(String(oneTimeCost || 0).replace(",", ".")),
      other: logisticsCost * forecastValue,
    },
    adjustedForecast: forecastValue,
    currency: "EUR",
    forecast: forecastValue,
    leadTime: logisticsCost,
    quality: materialCost,
    service: 0,
    risk: Number(String(moq || 0).replace(",", ".")),
    payment: "-",
    capacity: forecastValue,
    moq: Number(String(moq || 0).replace(",", ".")),
    sustainability: 0,
  };
}

function parseSupplierRows(text) {
  return text
    .trim()
    .split(/\n+/)
    .map((row) => row.split(/\t|,/).map((cell) => cell.trim()))
    .filter((cells) => cells.length >= 6);
}

function importSupplierText(text) {
  const rows = parseSupplierRows(text);
  if (!rows.length) return;
  customSuppliers.push(...rows.map(supplierFromPastedCells));
  saveCustomSuppliers();
  rebuildSuppliers();
  controls.savedNotice.textContent = t("importedRows").replace("{count}", rows.length);
  render();
}

function importUploadedFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const lowerName = file.name.toLowerCase();
  if (lowerName.endsWith(".xlsx")) {
    controls.savedNotice.textContent = t("uploadNeedsCsv");
    event.target.value = "";
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    importSupplierText(String(reader.result || ""));
    event.target.value = "";
  });
  reader.readAsText(file);
}

function saveAllData() {
  saveCustomSuppliers();
  controls.savedNotice.textContent = t("saved");
}

function selectMaterialFromPaste() {
  const query = controls.materialPaste.value.trim().toLowerCase();
  if (!query) return;
  const match = uniqueValues("material").find((material) =>
    material.toLowerCase().includes(query),
  );
  if (!match) return;
  controls.materialFilter.value = match;
  state.defaultMaterialApplied = true;
  render();
}

function bindEvents() {
  controls.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid =
      controls.usernameInput.value === LOGIN_USER &&
      controls.passwordInput.value === LOGIN_PASSWORD;
    if (!valid) {
      controls.loginError.textContent = t("loginError");
      return;
    }
    state.authenticated = true;
    sessionStorage.setItem(SESSION_KEY, "true");
    controls.loginError.textContent = "";
    render();
  });

  controls.logoutButton.addEventListener("click", () => {
    state.authenticated = false;
    sessionStorage.removeItem(SESSION_KEY);
    controls.passwordInput.value = "";
    render();
  });

  [controls.decisionTab, controls.analysisTab, controls.recordsTab].forEach((button) => {
    button.addEventListener("click", () => {
      state.activePage = button.dataset.page;
      render();
    });
  });

  controls.languageSelect.addEventListener("change", (event) => {
    state.language = event.target.value;
    render();
  });

  controls.sidebarToggle.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    localStorage.setItem(SIDEBAR_STORAGE_KEY, String(state.sidebarCollapsed));
    render();
  });

  [
    controls.materialFilter,
    controls.materialPaste,
    controls.regionFilter,
    controls.incotermFilter,
    controls.supplierSearch,
  ].filter(Boolean).forEach((control) => control.addEventListener("input", render));
  controls.materialPaste.addEventListener("input", selectMaterialFromPaste);

  Object.values(weightInputs)
    .filter(Boolean)
    .filter((node) => node.tagName === "INPUT")
    .forEach((input) => input.addEventListener("input", render));

  controls.resetWeights.addEventListener("click", () => {
    weightInputs.price.value = 40;
    weightInputs.leadTime.value = 25;
    weightInputs.quality.value = 20;
    weightInputs.service.value = 10;
    weightInputs.risk.value = 5;
    render();
  });

  controls.toggleSupplierForm.addEventListener("click", () => {
    state.supplierFormOpen = !state.supplierFormOpen;
    render();
  });

  controls.formPvForm.addEventListener("change", updatePackagingDescription);

  controls.supplierRows.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;
    state.selectedSupplierId = row.dataset.supplierId;
    render();
  });

  document.querySelectorAll("th[data-sort]").forEach((header) => {
    header.addEventListener("click", () => {
      const key = header.dataset.sort;
      if (state.sortKey === key) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = key;
        state.sortDirection = key === "decisionScore" ? "desc" : "asc";
      }
      render();
    });
  });

  controls.exportCsv.addEventListener("click", exportCsv);
  controls.approvalExport.addEventListener("click", exportCsv);
  controls.approvalPrint.addEventListener("click", printDecision);
  controls.approvalSave.addEventListener("click", saveApprovalSnapshot);
  controls.saveData.addEventListener("click", saveAllData);
  controls.supplierForm.addEventListener("submit", addSupplier);
  controls.clearCustomSuppliers.addEventListener("click", clearCustomSuppliers);
  controls.excelUploadFile.addEventListener("change", importUploadedFile);
}

function init() {
  bindEvents();
  fillPackagingOptions();
  baseSuppliers = loadExcelSuppliers();
  rebuildSuppliers();
  render();
}

init();
