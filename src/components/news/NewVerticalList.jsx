
import { useState } from "react";
import NewVerticalItem from "./NewVerticalItem";
import "../../styles/news/newVerticalList.css"

const NewVerticalList = () => {
   const articles = [
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/bo-truong-dao-ngoc-dung-truong-du-bi-dai-hoc-la-mo-hinh-giao-duc-dac-thu-161.jpg?width=360&s=8frNVXqWL_eeqvynDCjZCg",
            category: "CHÍNH TRỊ",
            title: "Bộ trưởng Đào Ngọc Dung: Trường Dự bị Đại học là mô hình giáo dục đặc thù",
            desc: "“Trường Dự bị Đại học Dân tộc là mô hình giáo dục có tính chất đặc thù, phù hợp với con em đồng bào dân tộc thiểu số, cần được duy trì và phát huy hiệu quả”, Bộ trưởng Bộ Dân tộc và Tôn giáo Đào Ngọc Dung khẳng định",
            link: "/chinh-tri/truong-du-bi-dai-hoc"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/viet-nam-keu-goi-thai-lan-va-campuchia-khong-de-cang-thang-leo-thang-3552.jpg?width=360&s=c_2Lhb8tcmEtvVGiyUTFww",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/bai-hoc-tu-chau-au-co-the-giup-viet-nam-giam-gan-80-muc-o-nhiem-khong-khi-430.jpg?width=360&s=Am3rAKrcxBNz7B1sh9Leww",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/thu-tuong-kiem-tra-san-bay-long-thanh-truoc-chuyen-bay-ky-thuat-2287.jpg?width=360&s=OFNtrfdrGk58ktFVep0Nmg",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/thu-tuong-kiem-tra-san-bay-long-thanh-truoc-chuyen-bay-ky-thuat-2287.jpg?width=360&s=OFNtrfdrGk58ktFVep0Nmg",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/dau-an-10-nam-cua-mot-hiep-hoi-va-su-ra-doi-trung-tam-phat-trien-nhan-luc-so-viet-nam-1956.jpg?width=360&s=IjkuVpmZrLwyX_OYphtGBg",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/thu-tuong-du-an-nhiet-dien-nhon-trach-3-va-4-the-hien-tinh-than-ban-linh-tri-tue-viet-nam-917.jpeg?width=360&s=SeNSmiliMDG0HS6GIW2iBQ",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/hoi-huong-hai-cot-quan-nhan-my-mat-tich-trong-chien-tranh-tai-viet-nam-1922.jpg?width=360&s=_hTdhx8GryeJLX_udNkZ8w",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/ban-bi-thu-tinh-gian-10-hoi-nghi-hang-nam-lanh-dao-ket-luan-khong-qua-50-phut-3012.jpg?width=360&s=VZ63G09kxEIipQjT0Yrs0A",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/can-bo-yeu-cau-dan-nop-them-giay-to-da-co-du-lieu-se-bi-xu-ly-trach-nhiem-863.jpeg?width=360&s=S3IHOf1KlQf9KbN_yK1n3Q",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
        {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/thu-tuong-xay-dung-the-che-phap-luat-thanh-nang-luc-canh-tranh-quoc-gia-1525.png?width=360&s=HDGBYpf6-VDF3Pfest4avA",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/trung-tuong-le-van-huong-giu-chuc-pho-tong-tham-muu-truong-qdnd-viet-nam-1772.jpg?width=360&s=RStKVJeuhSOyOr21QzjsDQ",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/de-xuat-co-chuc-danh-dai-su-dac-menh-toan-quyen-luu-dong-2928.jpg?width=360&s=jp-QZ1Y0pvgLkvdxwa7vNw",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/thu-tuong-viet-nam-malaysia-mong-muon-campuchia-va-thai-lan-kiem-che-2886.jpg?width=360&s=X8Gu8hJyYDhNwewFvFY1qg",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
            desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế, không để căng thẳng leo thang, đồng thời giải quyết bất đồng bằng các biện pháp hòa bình thông qua đối thoại",
            link: "/doi-ngoai/viet-nam-keu-goi"
        },
         {
            image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/thu-hoi-tai-san-tu-an-kinh-te-tham-nhung-duoc-hon-27-2146.jpg?width=360&s=9sRZiPcLppeeOWpY15DVxA",
            category: "ĐỐI NGOẠI",
            title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
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
