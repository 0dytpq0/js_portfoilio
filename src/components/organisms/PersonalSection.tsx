import SectionWrapper from "./SectionWrapper";

function PersonalSection() {
  return (
    <SectionWrapper title="Personal">
      <p className="text-[#7c584a] leading-relaxed">
        반갑습니다, 사용자 중심의 경험을 설계하는 이타적인 프론트엔드 개발자
        박요셉입니다. <br />
        저의 강점은 타인의 입장에서 생각하며 문제를 해결하려는 태도입니다.{" "}
        <br />
        사용자 관점에서 UX를 고민하고, 팀의 성과를 극대화하기 위해 협업과 소통에
        최선을 다합니다. <br /> 배움을 멈추지 않고 성장하며, 팀과 함께 더 나은
        결과를 만들어가는 데 기여하고 싶습니다. 감사합니다.
      </p>
    </SectionWrapper>
  );
}

export default PersonalSection;
