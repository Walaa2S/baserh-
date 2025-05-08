import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIPlaygroundHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center mb-10 bg-transparent" // ✅ التأكيد على أن الخلفية شفافة
    >
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        المساعدة بصيرة 👧
      </h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        حمّل بياناتك بسهولة باستخدام أدوات ذكية مدعومة بالذكاء الاصطناعي. ارفع، استعرض، واكتشف الرؤى في مكان واحد.
      </p>

      {/* زر رفع ملف CSV */}
      <div className="flex justify-center">
        <Button variant="secondary" className="gap-2 px-6">
          <Upload className="h-4 w-4" />
          Upload CSV File 📂
        </Button>
      </div>
    </motion.div>
  );
}