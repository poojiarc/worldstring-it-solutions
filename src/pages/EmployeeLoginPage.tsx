import { motion } from "framer-motion";
import { Lock, Mail, KeyRound } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmployeeLoginPage = () => (
  <PageLayout>
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md mx-auto px-4">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Employee Login</h1>
            <p className="text-sm text-muted-foreground">For internal employees only</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="email" placeholder="employee@worldstringit.com" className="pl-10" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Sign In</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-6">Contact IT support if you need access assistance.</p>
        </div>
      </motion.div>
    </section>
  </PageLayout>
);

export default EmployeeLoginPage;
