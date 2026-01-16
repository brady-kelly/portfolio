import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    Code,
    Database,
    Cloud,
    Users,
    Lightbulb,
    Download,
} from "lucide-react";
import { SkillsContent } from "@/components/cv-info/skills";
import { skillCategories, skillsTools } from "@/data/skills";
import { SkillCategory } from "@/lib/json/types";

export default function SkillsPage() {
    const categories = skillCategories as unknown as SkillCategory[];
    const tools = skillsTools as string[];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            <SkillsContent categories={categories} tools={tools} />
        </div>
    );
}
