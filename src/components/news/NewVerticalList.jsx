
import { useState } from "react";
import NewVerticalItem from "./NewVerticalItem";
import "../../styles/news/newVerticalList.css"

const NewVerticalList = () => {
   const articles = [
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/luc-luong-cong-an-quyet-tam-than-toc-xay-dung-lai-nha-o-bi-sap-do-thien-tai-1820.jpg?width=360&s=YEzluRcCEISFX6X4LoO36A",
            category: "DÂN SINH",
            title: "Lực lượng công an quyết tâm, thần tốc xây dựng lại nhà ở bị sập do thiên tai",
            desc: "Hưởng ứng “Chiến dịch Quang Trung”, lực lượng CAND quyết tâm, thần tốc xây dựng lại nhà ở bị sập do thiên tai, đặt mục tiêu hoàn thành trước 15/1/2026, sớm hơn 15 ngày so với yêu cầu của Chính phủ.",
            link: "/chinh-tri/truong-du-bi-dai-hoc"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/canh-sat-tha-day-giai-cuu-nam-thanh-nien-mac-ket-duoi-ho-sau-10m-2349.gif?width=360&s=GdfJeKkso6tiAKXnja4v-A",
            category: "DÂN SINH",
            title: "Cảnh sát thả dây, giải cứu nam thanh niên mắc kẹt dưới hố sâu 10m",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/chay-tiem-dien-nuoc-4-nguoi-trong-gia-dinh-tu-vong-107.jpg?width=360&s=rDfDKZOFxqc8RGarQs-x9g",
            category: "TIN NÓNG",
            title: "Cháy tiệm điện nước, 4 người trong gia đình tử vong",
            desc: "Vụ cháy tiệm điện nước ở xã Hòa Phú (Đắk Lắk) đã khiến 2 vợ chồng và 2 người con trai tử vong; một cháu nhỏ bị bỏng nặng và đang được cấp cứu tại bệnh viện.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/nan-nhan-ke-phut-kinh-hoang-bi-bo-con-hang-xom-chan-xe-xua-cho-du-tan-cong-1622.gif?width=360&s=dAtLFk69FcmvuA1-zTka6Q",
            category: "TIN NÓNG",
            title: "Nạn nhân kể phút kinh hoàng bị bố con hàng xóm chặn xe, xua chó dữ tấn công",
            desc: "Anh Phạm V.H. (Hà Nội) bàng hoàng kể lại giây phút bị bố con hàng xóm chặn đường đánh đập và xua chó cắn vợ chồng anh nhập viện.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/ket-qua-thu-nghiem-gia-bi-su-dung-tran-lan-lo-ro-khoang-trong-phap-ly-2406.jpeg?width=360&s=wqLT5hGa6weZKJL6aEvLJQ",
            category: "TIN NÓNG",
            title: "Kết quả thử nghiệm giả bị sử dụng tràn lan: Lộ rõ 'khoảng trống pháp lý'",
            desc: "Phiếu kết quả thử nghiệm giả được các doanh nghiệp, hộ kinh doanh và cá nhân tại 34 tỉnh, thành sử dụng tràn lan trong hồ sơ tự công bố, đăng ký công bố sản phẩm, công bố hợp quy, chất lượng…",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/lan-duong-danh-rieng-cho-xe-dap-dau-tien-tai-tphcm-lo-dien-sau-2-thang-thi-cong-2428.jpg?width=360&s=DzwOoV4r5IFd2wf100Bn3g",
            category: "GIAO THÔNG",
            title: "Làn đường dành riêng cho xe đạp đầu tiên tại TPHCM lộ diện sau 2 tháng thi công",
            desc: "Sau hơn hai tháng thi công, làn đường dành riêng cho xe đạp trên đại lộ Mai Chí Thọ đã thành hình, đánh dấu dự án thí điểm đầu tiên của TPHCM tách xe đạp khỏi dòng xe cơ giới.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/can-canh-dai-cong-truong-thi-cong-cau-vuot-song-hong-gan-10-3131.gif?width=360&s=SDclbV22Qj9W_pe4wQtPFA",
            category: "GIAO THÔNG",
            title: "Cận cảnh đại công trường thi công cầu vượt sông Hồng gần 10.000 tỷ đồng",
            desc: "Trên sông Hồng, vị trí các trụ cầu Hồng Hà đang dần lộ diện. Nhìn từ trên cao, đại công trường thi công nhộn nhịp với sà lan, cần cẩu và đường công vụ vươn dài giữa lòng sông.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/thuong-tet-nguyen-dan-o-dong-nai-cao-nhat-840-trieu-dong-2537.jpg?width=360&s=xhIm_0UDDEyQUiTtRwKWAA",
            category: "DÂN SINH",
            title: "Thưởng Tết Nguyên đán ở Đồng Nai cao nhất 840 triệu đồng",
            desc: "Thưởng Tết Nguyên đán Bính Ngọ 2026 tại Đồng Nai ghi nhận mức cao nhất 840 triệu đồng/người, thuộc khối doanh nghiệp dân doanh.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/nhung-cau-noi-quen-thuoc-tu-cuoc-goi-so-la-nghe-la-biet-lua-dao-3366.png?width=360&s=eIL9bvlS4FIpbIb_FrF-6g",
            category: "THỜI SỰ",
            title: "Những câu nói quen thuộc từ cuộc gọi số lạ: Nghe là biết lừa đảo",
            desc: "Những câu nói tưởng chừng quen thuộc trong các cuộc gọi từ số lạ đang trở thành “bẫy” lừa đảo ngày càng tinh vi. Việc nhận diện sớm sẽ giúp người dân tránh nguy cơ mất tiền và lộ lọt thông tin cá nhân.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/ly-do-hoan-phien-toa-xet-xu-nguoi-dan-ong-hanh-hung-phu-nu-tai-chung-cu-o-ha-noi-1300.png?width=360&s=fNnAAuOeAsSvLCIHFL-TWA",
            category: "TIN NÓNG",
            title: "Lý do hoãn phiên tòa xét xử người đàn ông hành hung phụ nữ tại chung cư ở Hà Nội",
            desc: "Ba luật sư bào chữa cho bị cáo Đặng Chí Thành đều vắng mặt và có đơn xin hoãn phiên tòa. Trả lời thẩm vấn của HĐXX, bị cáo cũng đề nghị hoãn phiên tòa.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/dang-ky-xe-may-1-copy-1402.jpg?width=360&s=SYvjjkd1_D6tzmMzvaQe1w",
            category: "GIAO THÔNG",
            title: "TPHCM dẫn đầu cả nước về đăng ký mới ô tô, xe máy trong năm 2025",
            desc: "Theo Cục CSGT (Bộ Công an), trong năm 2025, hơn 3,2 triệu xe máy và 624 nghìn ô tô được đăng ký mới trên toàn quốc; trong đó, TPHCM có số lượng đăng ký mới cao nhất.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/khong-khi-lanh-tran-sau-den-nam-trung-bo-ha-noi-ret-nhat-12-do-708.jpg?width=360&s=6z8M0zuM7e7cZcG6R18JNA",
            category: "DÂN SINH",
            title: "Không khí lạnh tràn sâu đến Nam Trung Bộ, Hà Nội rét nhất 12 độ",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/chay-xe-may-bang-mot-banh-2-thanh-nien-da-nang-bi-tich-thu-xe-xu-phat-nang-2313.gif?width=360&s=Dda15kMi5lu28C5mQ4LoEw",
            category: "ĐÔ THỊ",
            title: "Chạy xe máy bằng một bánh, 2 thanh niên Đà Nẵng bị tịch thu xe, xử phạt nặng",
            desc: "Công an TP Đà Nẵng vừa lập biên bản xử phạt 2 thanh niên có hành vi điều khiển xe máy chạy bằng một bánh, đồng thời tịch thu phương tiện.",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/le-thanh-than-1793.jpg?width=360&s=tazCj2OFORqIIHWvGXGDew",
            category: "TIN NÓNG",
            title: "Truy tố Chủ tịch Tập đoàn Mường Thanh Lê Thanh Thản",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
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
