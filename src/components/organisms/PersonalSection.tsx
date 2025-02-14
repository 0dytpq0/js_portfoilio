import SectionWrapper from "./SectionWrapper";

function PersonalSection() {
  return (
    <SectionWrapper title="Personal">
      <span className="text-[#7c584a] leading-relaxed">
        안녕하세요, 이타적인 프론트엔드 개발자 박요셉입니다. <br />
      </span>
      <h3 className="text-lg font-bold mt-3">핵심 역량</h3>
      <ul className="list-disc pl-5">
        <li>사용자의 입장에서 문제를 바라보는 시각</li>
        <li>웹 서비스 프론트엔드 설계, 개발 경험 보유</li>
        <li>원만한 대인관계 형성 능력</li>
      </ul>
    </SectionWrapper>
  );
}

export default PersonalSection;
