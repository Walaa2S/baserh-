export const translations = {
  en: {
    nav_home: "Home",
    nav_ai_playground: "AI Playground",
    nav_dashboard: "Dashboard",

    // AI Playground Page
    ai_playground_title: "AI Playground",
    ai_playground_description: "Analyze your data effortlessly using smart tools powered by AI. Upload, visualize, and explore insights in one place.",
    ai_playground_table_name: "Name",
    ai_playground_table_value: "Value",
    ai_playground_table_category: "Category",

    // Analysis Section
    analysis_title: "AI-Powered Analysis",
    analysis_avg: "Average",
    analysis_max: "Highest",
    analysis_min: "Lowest",
    analysis_empty: "No data loaded yet.",

    switch_lang: "Switch to Arabic",

    // Feature Cards
    features_title: "✨ Powerful Features",
    features_desc: "Unlock insights from your data with our comprehensive set of tools and features.",
    
    features_csv: "📤 CSV Upload",
    features_csv_desc: "Easily upload and parse CSV files with drag and drop functionality.",
    
    features_ai_playground: "🤖 AI Playground",
    features_ai_playground_desc: "Analyze your data and uncover smart insights using AI-powered interactive charts.",
    
    features_viz: "📊 Data Visualization",
    features_viz_desc: "Transform raw data into beautiful, insightful visualizations.",
    
    features_summary: "📝 AI-Powered Summaries",
    features_summary_desc: "Receive auto-generated human-readable summaries for your uploaded data.",
    
    features_updates: "📈 Real-time Updates",
    features_updates_desc: "Get instant updates as your data changes over time.",
    
    features_custom_dash: "📋 Custom Dashboards",
    features_custom_dash_desc: "Create personalized dashboards to monitor your key metrics.",

    // ✅ NEW: Smart Auto Analysis Feature
    features_auto_analysis: "🧠 Smart Auto Analysis",
    features_auto_analysis_desc: "Automatically detect and visualize numeric, text, and boolean patterns."
  },

  ar: {
    nav_home: "الرئيسية",
    nav_ai_playground: "المساعدة الذكية بصيرة 👧",
    nav_dashboard: "لوحة البيانات",

    // AI Playground Page
    ai_playground_title: "المساعدة الذكية بصيرة 👧",
    ai_playground_description: "حلّل بياناتك بسهولة باستخدام أدوات ذكية مدعومة بالذكاء الاصطناعي. ارفع، استعرض، واكتشف الرؤى في مكان واحد.",
    ai_playground_table_name: "الاسم",
    ai_playground_table_value: "القيمة",
    ai_playground_table_category: "الفئة",

    // Analysis Section
    analysis_title: "التحليل باستخدام الذكاء الاصطناعي",
    analysis_avg: "المتوسط",
    analysis_max: "الأعلى",
    analysis_min: "الأدنى",
    analysis_empty: "لم يتم تحميل بيانات بعد.",

    switch_lang: "التبديل إلى الإنجليزية",

    // Feature Cards
    features_title: "✨ ميزات قوية",
    features_desc: "استخرج الرؤى من بياناتك باستخدام مجموعة أدواتنا الشاملة.",
    
    features_csv: "📤 رفع ملفات CSV",
    features_csv_desc: "ارفع ملفات CSV بسهولة مع خاصية السحب والإفلات.",
    
    features_ai_playground: "🤖 المساعدة الذكية بصيرة",
    features_ai_playground_desc: "حلل بياناتك واكتشف رؤى ذكية باستخدام رسوم تفاعلية مدعومة بالذكاء الاصطناعي.",
    
    features_viz: "📊 عرض بصري للبيانات",
    features_viz_desc: "حوّل البيانات الخام إلى رسوم مرئية جذابة وغنية بالمعنى.",
    
    features_summary: "📝 ملخصات ذكية",
    features_summary_desc: "استلم تقارير تلقائية بلغة مفهومة للبيانات المرفوعة.",
    
    features_updates: "📈 تحديثات لحظية",
    features_updates_desc: "احصل على تحديثات فورية عند تغيير البيانات.",
    
    features_custom_dash: "📋 لوحات تحكم مخصصة",
    features_custom_dash_desc: "أنشئ لوحات تحكم مخصصة لمتابعة مؤشراتك المهمة.",

    // ✅ NEW: Smart Auto Analysis Feature
    features_auto_analysis: "🧠 التحليل الذكي التلقائي",
    features_auto_analysis_desc: "تعرف تلقائيًا على الأنماط الرقمية والنصية والمنطقية واعرضها بسهولة."
  }
};

// ✅ ترجمة المفاتيح
export function t(lang: "en" | "ar", key: keyof typeof translations["en"]) {
  return translations[lang]?.[key] || key;
}
