import { SubArticleTitle } from "@/app/[locale]/hotels/components/SubArticleTitle";
import { Article } from "@/app/[locale]/hotels/components/Article";

interface SubsectionArticleProps {
  title: string;
  text: string;
  className?: string;
}

export const SubsectionArticle = ({ title, text, className }: SubsectionArticleProps) => {
  return (
    <div>
      <SubArticleTitle title={title} />
      <div className="flex justify-center">
        <Article text={text} className="text-center" />
      </div>
    </div>
  );
};
