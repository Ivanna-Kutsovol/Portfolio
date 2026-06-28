import Featured from "./featuredWork/featuredWork";
import ContentIns from "./contentIns/contentIns";
import Tools from "./useTools/useTools";
import Identity from "./identity/identity";

export default function CreativeContent() {
    return (
        <div>
            <Featured/>
            <ContentIns/>
            <Tools/>
            <Identity/>
        </div>
    );
}