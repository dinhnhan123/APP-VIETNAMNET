
import { useState } from "react";
import EthnicityReligionVerticalItem from "./EthnicityReligionVerticalItem";
import "../../styles/ethnicityReligion/EthnicityReligionVerticalList.css";

const EthnicityReligionVerticalList = () => {
   const articles = [
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/nguoi-co-uy-tin-o-son-la-cau-noi-vun-dap-tinh-doan-ket-viet-nam-lao-163.jpg?width=360&s=qWecSg07e41omLLFrPTozg",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Người có uy tín ở Sơn La: “Cầu nối” vun đắp tình đoàn kết Việt Nam - Lào",
            desc: "Người có uy tín ở tỉnh Sơn La là lực lượng quan trọng giúp đưa chủ trương, chính sách của Đảng và Nhà nước đến với từng bản làng, từng gia đình, góp phần giữ gìn biên giới hòa bình, vun đắp tình đoàn kết Việt Nam – Lào bền chặt.",
            link: "/chinh-tri/truong-du-bi-dai-hoc"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/nha-tho-pham-phao-lung-linh-dem-giang-sinh-795.jpg?width=360&s=y7Ho7W6ZihxJP3-QjRE0ZA",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Nhà thờ Phạm Pháo lung linh đêm Giáng sinh",
            desc: "Nhà thờ giáo xứ Phạm Pháo ở Ninh Bình lung linh trong đêm Giáng sinh (24/12). Đây là địa điểm luôn thu hút đông đảo giáo dân và du khách.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/24/chia-khoa-nang-cao-chat-luong-nguon-nhan-luc-vung-dong-bao-dan-toc-thieu-so-1147.jpg?width=360&s=DqH4FiLieNr9sfS_wWKLFw",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Chìa khóa nâng cao chất lượng nguồn nhân lực vùng đồng bào dân tộc thiểu số",
            desc: "Nhờ sự quan tâm đầu tư đồng bộ về cơ sở vật chất trường nội trú, bán trú cùng các chính sách đặc thù, giáo dục vùng đồng bào dân tộc thiểu số (DTTS) và miền núi đang có những chuyển biến rõ nét.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/24/thu-truong-nguyen-hai-trung-gap-mat-dai-bieu-dien-hinh-vung-dong-bao-dtts-tinh-tuyen-quang-3125.jpg?width=360&s=_mYay8TkgDcFJXmIw5pD_Q",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Thứ trưởng Nguyễn Hải Trung gặp mặt đại biểu điển hình vùng đồng bào DTTS tỉnh Tuyên Quang",
            desc: "Chiều 24/12, Thứ trưởng Bộ Dân tộc và Tôn giáo Nguyễn Hải Trung đã gặp mặt Đoàn đại biểu điển hình tiên tiến trong vùng đồng bào dân tộc thiểu số (DTTS) tỉnh Tuyên Quang.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/24/bo-truong-dan-toc-va-ton-giao-gui-thu-chuc-mung-nhan-dip-giang-sinh-va-nam-moi-275.jpg?width=360&s=67lOHnr_7c6tQBdTi38c_Q",
            category: "CHÍNH TRỊ",
            title: "Bộ trưởng Dân tộc và Tôn giáo gửi thư chúc mừng nhân dịp Giáng sinh và năm mới",
            desc: "Nhân dịp lễ Giáng sinh năm 2025 và chào đón năm mới 2026, Ủy viên Trung ương Đảng, Bộ trưởng Bộ Dân tộc và Tôn giáo Đào Ngọc Dung đã có thư chúc mừng gửi tới các vị chức sắc, chức việc, tu sĩ cùng toàn thể đồng bào Công giáo, Tin Lành.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/23/khi-nguoi-linh-tro-thanh-hat-nhan-lan-toa-tri-thuc-so-360.jpg?width=360&s=U2_ubH1k3IbGxE1dqlfCtA",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Khi người lính trở thành hạt nhân lan tỏa tri thức số",
            desc: "Với mỗi người lính, phong trào “Bình dân học vụ số” không chỉ là việc phổ cập kỹ năng công nghệ, mà là một nhiệm vụ mang ý nghĩa chiến lược.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/22/tuyen-duong-hoc-sinh-sinh-vien-thanh-nien-dtts-xuat-sac-hieu-qua-tu-dau-tu-cho-giao-duc-vung-cao-1145.png?width=360&s=3G21hJ-Q2nE369eET4KZ_Q",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Tuyên dương học sinh, sinh viên, thanh niên DTTS xuất sắc: Hiệu quả từ đầu tư cho giáo dục vùng cao",
            desc: "145 gương mặt học sinh, sinh viên, thanh niên dân tộc thiểu số được vinh danh năm nay không chỉ ghi dấu những thành tích nổi bật trong học tập, nghiên cứu, nghệ thuật, thể thao mà còn phản ánh chuyển biến tích cực của giáo dục dân tộc giai đoạn mới.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/22/tu-xoa-nha-tam-den-chien-dich-quang-trung-nguoi-linh-giup-dan-dung-lai-mai-am-530.jpg?width=360&s=oPV5VyWF7nN6twFXzghYKw",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Từ xóa nhà tạm đến 'Chiến dịch Quang Trung': Người lính giúp dân dựng lại mái ấm",
            desc: "Từ Chương trình xóa nhà tạm, nhà dột nát trên phạm vi cả nước đến “Chiến dịch Quang Trung” dựng nhà cho người dân sau lũ, dấu ấn người lính in rõ trên tuyến đầu.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/20/lop-hoc-bai-choi-ban-dem-o-rung-ngap-man-1459.jpg?width=360&s=uvfxGa8oELDSD8Ic20A_SQ",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Lớp học bài chòi ban đêm ở rừng ngập mặn",
            desc: "Rừng ngập mặn Bàu Cá Cái, xã Vạn Tường, tỉnh Quảng Ngãi không chỉ hấp dẫn du khách bởi cảnh quan hoang sơ mà còn bởi làn điệu bài chòi được bảo tồn, gìn giữ bởi các thành viên Câu lạc bộ (CLB) Đàn và Hát dân ca Bàu Cá Cái.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/20/to-chuc-tot-phong-trao-thi-dua-de-cong-tac-dan-toc-ton-giao-thuc-su-chuyen-bien-254.jpg?width=360&s=4gWjgtL_Q_swwjgqylJ-sQ",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Tổ chức tốt phong trào thi đua để công tác dân tộc, tôn giáo thực sự chuyển biến",
            desc: "Bí thư Đảng ủy, Bộ trưởng Bộ Dân tộc và Tôn giáo Đào Ngọc Dung chỉ đạo toàn ngành tiếp tục quán triệt, triển khai tốt phong trào thi đua để công tác dân tộc, tôn giáo thực sự chuyển biến trong 5 năm tới.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/19/nhung-gia-lang-lang-le-giu-hon-van-hoa-giua-dai-ngan-3027.png?width=360&s=JWFrJSaQfc3b7AyEB_6_Ww",
            category: "TÀI CHÍNH",
            title: "Những già làng lặng lẽ giữ hồn văn hóa giữa đại ngàn",
            desc: "Giữa đại ngàn Trường Sơn, những già làng Cơ Tu vẫn lặng lẽ gìn giữ tiếng nói, lời ca, chữ viết và nếp văn hóa của cộng đồng, trở thành điểm tựa tinh thần của bản làng giữa dòng chảy hiện đại.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/20/trao-ho-tro-cho-850-ho-dan-chiu-thiet-hai-do-mua-lu-o-xa-mien-nui-son-hoa-1320.jpg?width=360&s=vgmYYetrphoxB2spo26IGA",
            category: "DÂN TỘC VÀ TÔN GIÁO",
            title: "Trao hỗ trợ cho 850 hộ dân chịu thiệt hại do mưa lũ ở xã miền núi Sơn Hòa",
            desc: "Hiệp hội PCCC&CNCH Việt Nam phối hợp với các đơn vị để trao hỗ trợ cho 850 hộ dân ở xã miền núi Sơn Hòa (Đắk Lắk), giúp người dân khắc phục hậu quả mưa lũ, từng bước ổn định đời sống",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/19/pho-chu-tich-quoc-hoi-tham-chuc-mung-giang-sinh-toa-giam-muc-giao-phan-ban-me-thuot-cdc4f554b302401da10a71045dfaee34-4102.jpg?width=360&s=Eglals1uqk4vRyrGjfHG_A",
            category: "CHÍNH TRỊ",
            title: "Phó Chủ tịch Quốc hội thăm, chúc mừng Giáng sinh Tòa Giám mục Giáo phận Ban Mê Thuột",
            desc: "Chiều 19/12, Phó Chủ tịch Quốc hội, Thượng tướng Trần Quang Phương cùng đoàn công tác của Quốc hội đã đến thăm, chúc mừng Tòa Giám mục Giáo phận Ban Mê Thuột và Giám mục Giáo phận Ban Mê Thuột Gioan Baotixita Nguyễn Huy Bắc.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/19/bo-ngoai-giao-len-tieng-ve-bao-cao-cap-nhat-ve-viet-nam-cua-my-3919.jpg?width=360&s=EGn-VNLUzT10rIcRMv_DlQ",
            category: "ĐỐI NGOẠI",
            title: "Bộ Ngoại giao lên tiếng về báo cáo cập nhật về Việt Nam của Mỹ",
            desc: "Người phát ngôn Bộ Ngoại giao bác bỏ những đánh giá không khách quan, không chính xác của Ủy ban Tự do tôn giáo quốc tế Mỹ về tình hình tôn giáo tại Việt Nam.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
    ];

    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArticles = articles.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <div className="politics-vertical-list">

            {/* LIST */}
            {currentArticles.map((item, index) => (
                <EthnicityReligionVerticalItem key={index} {...item} />
            ))}

            {/* PAGINATION */}
            <div className="pagination mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                >
                    ‹
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={currentPage === i + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >
                    ›
                </button>
            </div>

        </div>
    );
};

export default EthnicityReligionVerticalList;
