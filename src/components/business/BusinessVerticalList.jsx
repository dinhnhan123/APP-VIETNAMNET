
import { useState } from "react";
import NewVerticalItem from "./BusinessVerticalItem";
import "../../styles/business/BusinessVerticalList.css"

const NewVerticalList = () => {
   const articles = [
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/2026-ho-kinh-doanh-thieu-tien-nop-phat-se-bi-cuong-che-sang-tai-san-tung-thanh-vien-ho-651.jpg?width=360&s=w-uWiS1qBvGzp2CAPkAFew",
            category: "TÀI CHÍNH",
            title: "Từ 1/1/2026, hộ kinh doanh thiếu tiền nộp phạt sẽ bị cưỡng chế sang tài sản từng thành viên hộ",
            desc: "Quy định mới về cưỡng chế thi hành quyết định xử phạt vi phạm hành chính trong trường hợp tài sản chung không đủ thì khấu trừ tiền, kê biên tài sản của các thành viên trong hộ kinh doanh, hộ gia đình.",
            link: "/chinh-tri/truong-du-bi-dai-hoc"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/viet-nam-thanh-nguon-cung-vang-den-lon-nhat-cho-my-2813.jpg?width=360&s=lHBMoIB4dhr95tuybAuMgg",
            category: "THỊ TRƯỜNG",
            title: "Việt Nam thành nguồn cung ‘vàng đen’ lớn nhất cho Mỹ",
            desc: "Chiếm tới 69,3% kim ngạch nhập khẩu, Việt Nam trở thành nhà cung cấp “vàng đen” lớn nhất cho Mỹ trong năm nay với giá cao.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/bien-ho-chua-nuoc-thanh-nha-may-dien-mat-troi-lon-nhat-dong-nam-a-2940.png?width=360&s=OLmudOCxwsTDP-2txmNw7A",
            category: "NET ZERO",
            title: "Biến hồ chứa nước thành nhà máy điện mặt trời lớn nhất Đông Nam Á",
            desc: "MALAYSIA - Với diện tích khoảng 384ha và cung cấp đủ năng lượng cho hơn 100.000 hộ gia đình, nhà máy điện mặt trời nổi trên mặt hồ chứ nước tại Chereh Dam có quy mô lớn nhất Đông Nam Á..",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/tu-ke-khai-thue-tu-2026-ho-kinh-doanh-lo-sai-sot-bi-phat-toi-8-trieu-dong-2390.jpg?width=360&s=T6x6DvcDXbstbv2p_hFa-g",
            category: "TÀI CHÍNH",
            title: "Tự kê khai thuế từ 2026, hộ kinh doanh lo sai sót bị phạt tới 8 triệu đồng",
            desc: "Khi chuyển từ thuế khoán sang tự kê khai, hộ và cá nhân kinh doanh đối mặt nguy cơ sai sót dữ liệu, trong khi mức phạt hiện hành có thể lên tới 6-8 triệu đồng. Hộ kinh doanh mong được hỗ trợ để yên tâm chuyển đổi, không lo bị xử phạt.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/bao-tin-capital-dat-top-10-doanh-nghiep-xuat-sac-chau-a-thai-binh-duong-2025-742.png?width=360&s=LEpJMNG9JSJw_spjRvMM-Q",
            category: "THỊ TRƯỜNG",
            title: "Bảo Tín Capital đạt Top 10 Doanh nghiệp xuất sắc Châu Á - Thái Bình Dương 2025",
            desc: "Bảo Tín Capital - thành viên của Công ty Cổ phần Tập đoàn Bảo Tín - đã vinh dự được xướng danh trong Top 10 Doanh nghiệp xuất sắc Châu Á - Thái Bình Dương năm 2025 tại Diễn đàn Kinh tế Châu Á - Thái Bình Dương lần thứ 4.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/ma-don-bay-tai-cau-truc-de-toi-uu-van-hanh-nganh-hang-tieu-dung-nhanh-673.jpeg?width=360&s=rdBDaMtWq4rrb_pfwIxttw",
            category: "THỊ TRƯỜNG",
            title: "M&A - Đòn bẩy tái cấu trúc để tối ưu vận hành ngành hàng tiêu dùng nhanh",
            desc: "Thay vì chỉ tăng quy mô, nhiều doanh nghiệp chọn M&A như 1 công cụ để khai thác giá trị tiềm ẩn của những tài sản chưa được sử dụng hiệu quả. Thương vụ Sabeco tiếp quản Công ty Cổ phần Tập đoàn Bia Sài Gòn Bình Tây Sabibeco là 1 trường hợp điển hình.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/kho-bac-nha-nuoc-da-chi-tra-hon-163-2233.jpg?width=360&s=qbt5kkqI89opCdpD3dO0fg",
            category: "TÀI CHÍNH",
            title: "Kho bạc Nhà nước đã chi trả hơn 163.400 tỷ đồng cho cán bộ nghỉ theo Nghị định 178",
            desc: "Kho bạc Nhà nước cho biết đã thực hiện chi trả chế độ, chính sách theo Nghị định số 178/2024 của Chính phủ với số kinh phí là 163.482 tỷ đồng cho 117.073 người.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/thuong-tet-tai-da-nang-giam-manh-cao-nhat-chi-con-368-trieu-dong-2781.jpg?width=360&s=5ReuQJvntXNXwYqEoyEorQ",
            category: "KINH DOANH",
            title: "Thưởng Tết tại Đà Nẵng giảm mạnh, cao nhất chỉ còn 368 triệu đồng",
            desc: "Mức thưởng Tết 2025 tại thành phố Đà Nẵng cao nhất thuộc về một doanh nghiệp FDI với hơn 368 triệu đồng, giảm gần một nửa so với năm ngoái.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/khong-gian-mua-sam-giua-long-thu-do-cua-muji-hanoi-centre-1466.jpg?width=360&s=0pH5MKHDroFbo8pTJjIRIw",
            category: "THỊ TRƯỜNG",
            title: "Không gian mua sắm giữa lòng thủ đô của MUJI Hanoi Centre",
            desc: "Cửa hàng MUJI Hanoi Centre vừa khai trương tại vị trí đắc địa giữa lòng thủ đô trở thành địa điểm mua sắm hấp dẫn với không gian mang bản sắc văn hóa Hà Nội kết hợp tinh thần tối giản Nhật Bản.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/petrovietnam-quyet-tam-but-pha-dong-gop-vao-muc-tieu-tang-truong-2-con-so-328.jpg?width=360&s=ccSNZaq4MQfn_6qoVb3eug",
            category: "THỊ TRƯỜNG",
            title: "Petrovietnam quyết tâm bứt phá, đóng góp vào mục tiêu tăng trưởng ‘2 con số’",
            desc: "Petrovietnam quyết tâm thực hiện thắng lợi các chỉ tiêu kế hoạch được giao, phấn đấu để Tập đoàn bứt phá, đóng góp quan trọng vào mục tiêu tăng trưởng “2 con số” của đất nước.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/co-phieu-vingroup-het-giam-san-tai-san-cua-ty-phu-pham-nhat-vuong-ra-sao-1739.jpg?width=360&s=sMCgx9cJvKG7m4_RlqVBQQ",
            category: "TÀI CHÍNH",
            title: "Cổ phiếu Vingroup hết giảm sàn, tài sản của tỷ phú Phạm Nhật Vượng ra sao?",
            desc: "Tài sản của tỷ phú Phạm Nhật Vượng tiếp tục giảm sau khi Tập đoàn Vingroup (VIC) xin rút đăng ký đầu tư dự án Đường sắt tốc độ cao Bắc - Nam.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/2025-quay-dau-giam-vang-mieng-sjc-van-gan-160-trieu-dong-2971.jpg?width=360&s=ao0G54s3bM5nq_DDFw-Enw",
            category: "TÀI CHÍNH",
            title: "Giá vàng hôm nay 26/12/2025: Vàng miếng bứt phá, leo lên gần 160 triệu/lượng",
            desc: "Giá vàng hôm nay 26/12/2025 tiếp tục bứt phá mạnh khi vàng SJC leo lên vùng cao kỷ lục, áp sát mốc 160 triệu đồng/lượng.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/vung-tau-paradise-xuyen-viet-oil-golden-hill-no-thue-nghin-ty-tai-tphcm-1348.jpg?width=360&s=e1rkAjqCXuUEN1zKlkZmbQ",
            category: "TÀI CHÍNH",
            title: "Vũng Tàu Paradise, Xuyên Việt Oil, Golden Hill… nợ thuế nghìn tỷ tại TPHCM",
            desc: "Trong nhóm đầu doanh nghiệp nợ thuế vừa được Thuế TPHCM công khai, có không ít công ty hoạt động trong lĩnh vực bất động sản. Đáng chú ý, doanh nghiệp đứng đầu danh sách nợ thuế đang nợ hơn 2.000 tỷ đồng.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/cu-soc-ho-vin-roi-manh-thi-truong-chao-dao-dau-phien-533.jpg?width=360&s=e-zZvjY7yX0SaRibdxFPsw",
            category: "TÀI CHÍNH",
            title: "Diễn biến nhóm 'cổ phiếu Vin' sau thay đổi mục tiêu đầu tư",
            desc: "Nhóm cổ phiếu 'họ Vin' tiếp tục lao dốc và tài sản tỷ phú Phạm Nhật Vượng bốc hơi nhanh chóng sau thông tin Tập đoàn Vingroup (VIC) xin rút đăng ký đầu tư dự án Đường sắt tốc độ cao Bắc - Nam. VN-Index mất thêm hơn 30 điểm.",
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
                <NewVerticalItem key={index} {...item} />
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

export default NewVerticalList;
