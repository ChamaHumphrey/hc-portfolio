import { Download } from "lucide-react";
import { site } from "@/lib/content";

export default function CvButton({ className = "btn btn-ghost", label = "Download CV" }: { className?: string; label?: string }) {
  if (!site.cvUrl) {
    return <span className={className} aria-disabled="true" title="CV will be available soon"><Download size={16} aria-hidden /> CV coming soon</span>;
  }
  return <a className={className} href={site.cvUrl} download><Download size={16} aria-hidden /> {label}</a>;
}
