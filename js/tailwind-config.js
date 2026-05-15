tailwind.config = {
            theme: {
                extend: {
                    screens: {
                        // md: 768px는 Tailwind 기본값 그대로 사용
                        // 1200px 이상을 'desktop'으로 명명
                        'desktop': '1200px',
                    },
                    fontFamily: {
                        'pretendard': ['Pretendard', 'sans-serif'],
                        'serif-kr': ['Noto Serif KR', 'serif'],
                        'abhaya': ['Abhaya Libre', 'serif'],
                        'kotta': ['Kotta One', 'serif'],
                    },
                    colors: {
                        'brand': '#D06A2C',
                        'brand-hover': '#d9560f',
                        'bg-main': '#F6F4F0',
                    }
                }
            }
        }
