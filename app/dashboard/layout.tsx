// 앱 내 특정 경로에서 SideNav 컴포넌트를 임포트합니다.
import SideNav from '@/app/ui/dashboard/sidenav';

// "children" prop을 받는 Layout 컴포넌트를 정의합니다. 여기서 children은 ReactNode 타입입니다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 메인 컨테이너는 flex 디스플레이를 사용하며 전체 화면 높이를 차지하고 반응형 디자인을 적용합니다.
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* SideNav를 위한 컨테이너로, 중간 크기의 장치에서 고정 너비를 가집니다. */}
      <div className="w-full flex-none md:w-64">
        {/* SideNav 컴포넌트를 렌더링합니다. */}
        <SideNav />
      </div>
      {/* 자식 컴포넌트들을 위한 컨테이너로, 유연한 성장, 패딩을 적용하며 중간 크기의 장치에서 스크롤 가능합니다. */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

