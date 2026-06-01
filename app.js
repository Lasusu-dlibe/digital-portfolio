// ==========================================
// Data
// ==========================================
const projectsData = [
    {
        id: "01",
        title: "BÀI 1: THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC",
        shortDesc: "Thiết lập hệ thống quản lý dữ liệu học tập khoa học, áp dụng quy tắc đặt tên chuẩn mực.",
        icon: "folder",
        file: "week1.zip",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Thiết lập một hệ thống quản lý dữ liệu học tập khoa học, áp dụng quy tắc đặt tên chuẩn mực để tối ưu hóa thời gian tìm kiếm và tránh thất lạc tài liệu trong suốt 4 năm đại học.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Hệ điều hành Windows 11 File Explorer.</li>
                    <li>Công cụ vẽ sơ đồ Mindmeister (để phác thảo cấu trúc).</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Bước 1:</b> Đánh giá toàn bộ lượng tài liệu hiện có và phân loại theo học kỳ, môn học.<br>
                <b>Bước 2:</b> Xây dựng cây thư mục logic theo nguyên tắc "Không quá 3 tầng click chuột".<br>
                <b>Bước 3:</b> Áp dụng quy tắc đặt tên tệp nhất quán: <code>[MãMôn]_TênTàiLiệu_[PhiênBản]_[NgàyNộp]</code>.</p>
                
                <h4 style="margin-top: 15px; color: var(--text-primary);">SƠ ĐỒ CÂY THƯ MỤC</h4>
                <div class="prompt-box">📂 UET_Learning_Data/
├── 📂 K70_Học_Kỳ_1/
│   ├── 📂 UET.A14_Nhập_môn_CN_Số/
│   │   ├── 📂 01_Bài_tập_Cá_nhân/
│   │   │   └── 📄 UET.A14_Digital_Portfolio_V1_20260516.pdf
│   │   └── 📂 02_Bài_tập_Nhóm/
│   └── 📂 INT1004_Nhập_môn_Lập_trình/
└── 📂 K70_Học_Kỳ_2/</div>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Thói quen lưu tệp bừa bãi ra màn hình Desktop cũ khiến việc phân loại ban đầu mất nhiều thời gian.<br><br>
                <b>Bài học:</b> Việc tổ chức dữ liệu khoa học ngay từ đầu giúp giải phóng không gian tinh thần (mental space), tăng tốc hiệu suất làm việc khi cần truy xuất tài liệu gấp.</p>
            </div>
        `
    },
    {
        id: "02",
        title: "BÀI 2: TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT",
        shortDesc: "Khai thác tài liệu nghiên cứu chất lượng cao về chủ đề Tác động của AI đối với sinh viên ngành IT.",
        icon: "search",
        file: "week2.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Khai thác tài liệu nghiên cứu chất lượng cao về chủ đề "Tác động của AI đối với sinh viên ngành IT", loại bỏ các nguồn tin rác hoặc thiếu kiểm chứng.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Google Scholar, ResearchGate.</li>
                    <li>Các toán tử nâng cao (<code>site:</code>, <code>filetype:</code>, <code>""</code>, <code>AND</code>).</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Chiến lược tìm kiếm:</b> Sử dụng cú pháp nâng cao để thu hẹp phạm vi:<br>
                <code>"Artificial Intelligence" AND "computer science students" site:.edu filetype:pdf</code></p>
                <p style="margin-top: 10px;"><b>Kết quả:</b> Hệ thống lọc được 5 bài báo khoa học chuẩn Q1/Q2 thay vì hàng ngàn bài blog không rõ nguồn gốc trên Google thường ngày.</p>
                
                <h4 style="margin-top: 15px; color: var(--text-primary);">Bảng đánh giá nguồn tin (CRAAP Test)</h4>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: var(--text-secondary); text-align: left;">
                    <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 8px;">Tiêu chí</th><th style="padding: 8px;">Chi tiết đánh giá bài báo của IEEE</th><th style="padding: 8px;">Kết luận</th></tr>
                    <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 8px;"><b>Currency</b> (Tính cập nhật)</td><td style="padding: 8px;">Xuất bản năm 2025, hoàn toàn phù hợp với bối cảnh công nghệ hiện tại.</td><td style="padding: 8px; color: #10b981;">Đạt</td></tr>
                    <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 8px;"><b>Relevance</b> (Tính liên quan)</td><td style="padding: 8px;">Tập trung chính xác vào kỹ năng lập trình của sinh viên CNTT.</td><td style="padding: 8px; color: #10b981;">Đạt</td></tr>
                    <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 8px;"><b>Authority</b> (Nguồn uy tín)</td><td style="padding: 8px;">Được phát hành bởi tổ chức uy tín IEEE Computer Society.</td><td style="padding: 8px; color: #10b981;">Đạt</td></tr>
                    <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 8px;"><b>Accuracy</b> (Tính chính xác)</td><td style="padding: 8px;">Có số liệu thực nghiệm, phương pháp nghiên cứu rõ ràng.</td><td style="padding: 8px; color: #10b981;">Đạt</td></tr>
                    <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 8px;"><b>Purpose</b> (Mục đích)</td><td style="padding: 8px;">Nghiên cứu học thuật phi lợi nhuận.</td><td style="padding: 8px; color: #10b981;">Đạt</td></tr>
                </table>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Ban đầu khi chưa dùng toán tử, kết quả trả về quá rộng và hầu hết là các bài báo mạng giật gân, thiếu tính học thuật.<br><br>
                <b>Bài học:</b> Kỹ năng đặt câu hỏi và lọc thông tin (Information Literacy) quan trọng hơn việc chỉ đọc số lượng lớn. Muốn đi sâu vào ngành IT, phải biết cách tìm tài liệu gốc từ các nguồn uy tín.</p>
            </div>
        `
    },
    {
        id: "03",
        title: "BÀI 3: VIẾT PROMPT HIỆU QUẢ CHO TÁC VỤ HỌC TẬP (PROMPT ENGINEERING)",
        shortDesc: "Ứng dụng các kỹ thuật Prompt Engineering nâng cao để biến AI thành một gia sư.",
        icon: "message-square",
        file: "week3.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Ứng dụng các kỹ thuật Prompt Engineering nâng cao để biến AI thành một gia sư hỗ trợ giải thích các thuật toán cấu trúc dữ liệu phức tạp.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <p style="color: var(--text-secondary);">Gemini 1.5 Pro / ChatGPT-4o.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>❌ Prompt ban đầu (Sơ sài):</b> "Giải thích cho tao thuật toán QuickSort trong Java."<br>
                <i>Kết quả từ AI:</i> Trả về một đoạn code Java mẫu chuẩn và định nghĩa lý thuyết khô khan lấy từ sách giáo khoa, rất khó để một sinh viên năm nhất hiểu sâu về bản chất vận hành của con trỏ trái/phải.</p>
                <p style="margin-top: 15px;"><b>✅ Prompt cải tiến (Áp dụng khung cấu trúc: Vai trò - Bối cảnh - Nhiệm vụ - Định dạng):</b></p>
                <div class="prompt-box" style="font-style: italic;">Bạn là một Giảng viên Cấu trúc dữ liệu và Giải thuật xuất sắc tại UET. Tôi là sinh viên năm nhất đang gặp khó khăn trong việc hiểu cách hoạt động của thuật toán QuickSort.
Hãy giải thích thuật toán này bằng phương pháp tư duy trực quan (Visual Thinking), sử dụng ví dụ thực tế về việc xếp một hàng học sinh theo chiều cao.
Định dạng đầu ra gồm:
1. Ý tưởng cốt lõi (không dùng thuật ngữ hàn lâm).
2. Từng bước dịch chuyển của các phần tử dựa trên ví dụ hàng học sinh.
3. Đoạn code Java sạch, có comment giải thích rõ ràng dòng code đóng vai trò gì.</div>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="bar-chart-2" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> So sánh kết quả & Phân tích cơ chế</h3>
                <p><b>Sự khác biệt ở đầu ra:</b> Kết quả từ prompt cải tiến sinh động hơn hẳn. AI không chỉ đưa code mà đã nhân hóa các phần tử trong mảng thành "các bạn học sinh", giúp mình hình dung được cách phân đoạn (Partition) diễn ra như thế nào.</p>
                <p style="margin-top: 10px;"><b>Tại sao Prompt cải tiến tốt hơn?</b></p>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li><b>Thiết lập vai trò (Role):</b> Định hình văn phong và độ sâu kiến thức của AI (Giảng viên UET).</li>
                    <li><b>Giới hạn bối cảnh (Context):</b> Giúp AI biết đối tượng tiếp nhận là sinh viên năm nhất để điều chỉnh thuật ngữ phù hợp.</li>
                    <li><b>Ràng buộc định dạng (Format constraint):</b> Ép AI phải tư duy theo từng bước (Chain-of-Thought) và sử dụng phép ẩn dụ trực quan thay vì copy-paste tài liệu có sẵn.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Nếu không biết cách kiểm soát độ dài và đưa tiêu chí rõ ràng, AI rất dễ bị "lan man" hoặc tự động viết luôn toàn bộ code của các bài tập khác.<br><br>
                <b>Bài học:</b> Chất lượng đầu ra của AI tỷ lệ thuận với năng lực tư duy logic và khả năng làm chủ ngôn ngữ của người ra lệnh (Prompt Engineer).</p>
            </div>
        `
    },
    {
        id: "04",
        title: "BÀI 4: SỬ DỤNG CÔNG CỤ HỢP TÁC TRỰC TUYẾN CHO DỰ ÁN NHÓM",
        shortDesc: "Quản lý, phân công và theo dõi tiến độ dự án làm bài tập lớn môn học.",
        icon: "users",
        file: "week4.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Quản lý, phân công và theo dõi tiến độ dự án làm bài tập lớn môn học, tối ưu hóa sự phối hợp từ xa giữa các thành viên trong nhóm.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Trello (Quản lý dự án theo mô hình Kanban).</li>
                    <li>Google Docs / Google Drive (Hợp tác biên tập nội dung theo thời gian thực).</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p>Nhóm đã chia nhỏ dự án thành các thẻ công việc (Tasks) trên Trello với đầy đủ trạng thái: <b>To Do (Cần làm) -> In Progress (Đang làm) -> Review (Kiểm tra) -> Done (Hoàn thành)</b>.</p>
                <p style="margin-top: 10px;">Mỗi thành viên được gán (Assign) trách nhiệm cụ thể và có Deadline rõ ràng, giúp loại bỏ tình trạng "trễ hạn" hoặc đùn đẩy trách nhiệm.</p>
                <p style="margin-top: 10px; font-style: italic; color: var(--text-secondary);">[HÌNH ẢNH MINH HỌA: MÀN HÌNH BẢNG TRELLO CỦA NHÓM] (Đính kèm trong tài liệu)</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Một số thành viên ban đầu quên cập nhật trạng thái thẻ trên Trello, dẫn đến việc quản lý tiến độ bị sai lệch.<br><br>
                <b>Bài học:</b> Công cụ số chỉ phát huy tác dụng khi đi kèm với kỷ luật đội ngũ và một quy trình giao tiếp minh bạch.</p>
            </div>
        `
    },
    {
        id: "05",
        title: "BÀI 5: SỬ DỤNG AI TẠO SINH ĐỂ HỖ TRỢ SÁNG TẠO NỘI DUNG",
        shortDesc: "Ứng dụng AI tạo sinh để thiết kế bộ nhận diện truyền thông.",
        icon: "image",
        file: "week5.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Ứng dụng AI tạo sinh để thiết kế bộ nhận diện truyền thông (gồm bài viết, hình ảnh minh họa) cho một chiến dịch nâng cao nhận thức về an toàn thông tin mạng trong môi trường học đường.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li><b>Tạo văn bản:</b> Gemini (Lên outline và tinh chỉnh nội dung bài viết).</li>
                    <li><b>Tạo hình ảnh:</b> Nano Banana 2 (Gemini 3 Flash Image) để gen ảnh minh họa 3D theo concept công nghệ hiện đại.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Bước 1:</b> Dùng AI phân tích tâm lý sinh viên để chọn ra 3 chủ đề nóng nhất (Lừa đảo chuyển khoản, lộ thông tin cá nhân qua link lạ, mất tài khoản mạng xã hội).<br>
                <b>Bước 2:</b> Viết bài viết phân tích kỹ thuật và giải pháp phòng tránh với văn phong gần gũi.<br>
                <b>Bước 3:</b> Sử dụng AI tạo ảnh tạo ra các artwork mang phong cách Cyberpunk độc đáo để thu hút tương tác thị giác.</p>
                <p style="margin-top: 10px; font-style: italic; color: var(--text-secondary);">[SẢN PHẨM TRƯNG BÀY: ẢNH VÀ ĐOẠN TRÍCH BÀI VIẾT TRUYỀN THÔNG] (Đính kèm trong tài liệu)</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Hình ảnh do AI tạo ra đôi khi bị lỗi hiển thị ký tự chữ hoặc các chi tiết nhỏ như ngón tay bị biến dạng.<br><br>
                <b>Bài học:</b> AI tạo sinh cực kỳ mạnh mẽ trong khâu khơi nguồn ý tưởng (Ideation), nhưng con người bắt buộc phải đóng vai trò là "Tổng biên tập" để rà soát, sửa lỗi và thổi "hồn" vào sản phẩm cuối cùng.</p>
            </div>
        `
    },
    {
        id: "06",
        title: "BÀI 6: SỬ DỤNG AI CÓ TRÁCH NHIỆM TRONG HỌC TẬP VÀ NGHIÊN CỨU",
        shortDesc: "Xây dựng một bộ khung đạo đức cá nhân nhằm khai thác sức mạnh của AI.",
        icon: "shield",
        file: "week6.pdf",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Xây dựng một bộ khung đạo đức cá nhân nhằm khai thác sức mạnh của AI mà không vi phạm các tiêu chuẩn về liêm chính học thuật của nhà trường.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="check-circle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Bộ nguyên tắc cá nhân khi sử dụng AI (6 Điều cốt lõi)</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li><b>Nguyên tắc "Cộng sự, không phải Thay thế":</b> Chỉ dùng AI để brainstorm, giải thích khái niệm hoặc sửa lỗi cú pháp code; tuyệt đối không để AI làm hộ 100% bài tập lớn.</li>
                    <li><b>Nguyên tắc "Xác thực kép" (Fact-checking):</b> Mọi thông tin, số liệu, hoặc đoạn mã do AI cung cấp phải được đối chiếu lại với tài liệu chính thống hoặc chạy thử nghiệm thực tế để tránh hiện tượng AI "ảo tưởng" (Hallucination).</li>
                    <li><b>Nguyên tắc "Minh bạch nguồn gốc":</b> Luôn khai báo rõ ràng trong báo cáo nếu có sử dụng sự trợ giúp của AI ở các khâu tối ưu hóa mã nguồn hoặc hiệu đính văn bản.</li>
                    <li><b>Nguyên tắc "Bảo mật dữ liệu":</b> Không tải lên các công cụ AI công cộng những thông tin nội bộ của nhà trường, mã nguồn dự án chưa công bố hoặc dữ liệu cá nhân nhạy cảm.</li>
                    <li><b>Nguyên tắc "Tôn trọng bản quyền":</b> Khi dùng AI để tạo sinh hình ảnh hoặc nội dung, phải kiểm tra kỹ nguồn dữ liệu huấn luyện và không sao chép nguyên bản phong cách của các nghệ sĩ đương đại khi chưa được phép.</li>
                    <li><b>Nguyên tắc "Phát triển tư duy độc lập":</b> Luôn tự giải quyết bài toán bằng tư duy cá nhân trước khi tham khảo giải pháp của AI để tránh thui chột khả năng tư duy logic của một kỹ sư IT.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="eye" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Phân tích các vấn đề đạo đức AI dưới góc nhìn sinh viên IT</h3>
                <p><b>Đạo văn thế hệ mới (AI-generated Plagiarism):</b> Việc copy toàn bộ mã nguồn do AI viết rồi nộp bài mà không hiểu bản chất không chỉ là gian lận học thuật, mà còn tạo ra một thế hệ lập trình viên "rỗng kiến thức", mất khả năng gỡ lỗi (debug) khi hệ thống gặp sự cố lớn.</p>
                <p style="margin-top: 10px;"><b>Sự thiên vị và định kiến (Bias):</b> Các mô hình AI được huấn luyện trên dữ liệu cũ có thể chứa các định kiến về giới tính hoặc sắc tộc trong ngành công nghệ. Nếu sinh viên IT tiếp nhận thông tin thiếu chọn lọc, chúng ta sẽ vô tình duy trì những định kiến đó vào các sản phẩm phần mềm tương lai.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="lightbulb" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Đề xuất cách sử dụng AI đúng đắn trong học tập</h3>
                <p><b>Biến AI thành "Rubber Ducking" nâng cao:</b> Thay vì hỏi AI <i>"Hãy viết code bài này"</i>, hãy hỏi <i>"Đoạn code này của tôi đang bị lỗi logic ở đâu, hãy gợi ý hướng tối ưu"</i>. Điều này giúp sinh viên giữ vững vai trò chủ thể trong quá trình học.</p>
            </div>
        `
    }
];

// ==========================================
// Views Templates
// ==========================================

const views = {
    home: () => `
        <div class="view home-view" style="flex-direction: column; align-items: flex-start; max-width: 900px; margin: 0 auto;">
            <div style="margin-bottom: 30px;">
                <h1 class="home-title" style="font-size: 2rem; margin-bottom: 10px;"><i data-lucide="pin" style="color: #ef4444; width: 28px; height: 28px; vertical-align: middle;"></i> CHÀO MỪNG ĐẾN VỚI DIGITAL PORTFOLIO CỦA TÔI</h1>
                <p style="font-size: 1.1rem; font-style: italic; color: var(--text-secondary);">Một không gian lưu trữ, học tập và định hình tư duy công nghệ trong kỷ nguyên số.</p>
            </div>

            <div class="detail-block" style="width: 100%; margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #a855f7; display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                    <i data-lucide="user"></i> GIỚI THIỆU CHUNG
                </h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Họ và tên:</b> Lã Quốc Sử</li>
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Ngành học:</b> Công nghệ thông tin (IT) - Đại học Công nghệ (VNU-UET).</li>
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Sở thích:</b> Lập trình phần mềm, tối ưu hóa quy trình làm việc bằng công nghệ, phát triển ứng dụng di động và tìm hiểu về cơ chế vận hành của các mô hình trí tuệ nhân tạo lớn (LLMs).</li>
                </ul>
            </div>

            <div class="detail-block" style="width: 100%; margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #ec4899; display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                    <i data-lucide="target"></i> MỤC TIÊU HỌC TẬP & ĐỊNH HƯỚNG PHÁT TRIỂN
                </h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Mục tiêu ngắn hạn:</b> Làm chủ các công cụ cốt lõi trong môi trường số, xây dựng tư duy cộng tác trực tuyến hiệu quả và ứng dụng AI như một "cộng sự" đắc lực để tối ưu hóa hiệu suất học tập tại UET.</li>
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Định hướng dài hạn:</b> Trở thành một Kỹ sư phần mềm (Software Engineer) không chỉ giỏi code mà còn có tư duy giải quyết vấn đề (problem-solving) tốt, biết ứng dụng AI một cách có trách nhiệm để tạo ra các giá trị thực cho xã hội.</li>
                </ul>
            </div>

            <div class="detail-block" style="width: 100%;">
                <h3 style="font-size: 1.2rem; color: #3b82f6; display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                    <i data-lucide="monitor"></i> MỤC TIÊU CỦA PORTFOLIO NÀY
                </h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Hệ thống hóa năng lực:</b> Minh chứng trực quan cho những kỹ năng số và tư duy ứng dụng AI mà bản thân đã tích lũy qua môn học UET.A14.</li>
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Lưu trữ & Chia sẻ:</b> Tạo một "bản sơ yếu lý lịch số" chuyên nghiệp, dễ dàng chia sẻ với giảng viên, bạn bè và các nhà tuyển dụng trong tương lai.</li>
                    <li><span style="display:inline-block; width: 20px;">○</span> <b>Đánh giá bản thân:</b> Nhìn nhận lại hành trình phát triển để liên tục cải tiến tư duy học tập.</li>
                </ul>
            </div>
        </div>
    `,
    
    projects: () => `
        <div class="view">
            <div class="projects-grid">
                ${projectsData.map(project => `
                    <div class="project-card">
                        <span class="card-number">${project.id}</span>
                        <div class="card-icon">
                            <i data-lucide="${project.icon}"></i>
                        </div>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-desc">${project.shortDesc}</p>
                        <button class="btn-outline" onclick="loadProjectDetail('${project.id}')">Xem chi tiết</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    projectDetail: (project) => `
        <div class="view project-detail">
            <button class="back-btn" onclick="navigate('projects')">
                <i data-lucide="arrow-left"></i> Quay lại danh sách
            </button>
            
            <div class="detail-header" style="margin-bottom: 20px;">
                <div class="detail-icon">
                    <i data-lucide="${project.icon}"></i>
                </div>
                <div>
                    <h2 class="detail-title">${project.title}</h2>
                    <p style="color: var(--text-secondary); margin-top: 5px;">${project.shortDesc}</p>
                    ${project.file ? `<a href="files/${project.file}" target="_blank" download class="btn-outline" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 15px; padding: 6px 12px;"><i data-lucide="download" style="width: 16px; height: 16px;"></i> Xem & Tải file</a>` : ''}
                </div>
            </div>

            <div class="project-html-content" style="display: flex; flex-direction: column; gap: 24px;">
                ${project.contentHtml}
            </div>
        </div>
    `,

    summary: () => `
        <div class="view">
            <div class="summary-grid">
                <div class="summary-card">
                    <i data-lucide="heart"></i>
                    <h3>⏳ Trải nghiệm và cảm nhận cá nhân</h3>
                    <p>Hành trình xây dựng Digital Portfolio này không đơn thuần là việc hoàn thành một bài tập cuối kỳ, mà là một cơ hội để mình nghiêm túc nhìn lại sự thay đổi của bản thân. Từ một sinh viên công nghệ còn nhiều bỡ ngỡ với các công cụ trực tuyến, việc tự tay thiết kế và hệ thống hóa toàn bộ sản phẩm trên một nền tảng web giúp mình có được cái nhìn tổng quan và thực tế hơn về ngành học.</p>
                </div>
                
                <div class="summary-card">
                    <i data-lucide="book-open"></i>
                    <h3>🧠 Kiến thức & Kỹ năng quan trọng nhất</h3>
                    <ul>
                        <li><b>Tư duy kỹ thuật hệ thống (Systematic Thinking):</b> Học được cách tổ chức thông tin sao cho logic, scannable và tối ưu hóa trải nghiệm người dùng (UX) ngay trên chính trang portfolio này.</li>
                        <li><b>Kỹ nghệ ra lệnh (Prompt Engineering):</b> Đây là kỹ năng tối quan trọng của tương lai. Mình hiểu rằng năng lực giao tiếp hiệu quả với AI chính là đòn bẩy định hình năng suất lao động của một lập trình viên hiện đại.</li>
                        <li><b>Tư duy phản biện trước công nghệ:</b> Nhận thức rõ ràng ranh giới giữa việc ứng dụng AI để tăng hiệu suất và việc lạm dụng AI dẫn đến lười tư duy.</li>
                    </ul>
                </div>

                <div class="summary-card">
                    <i data-lucide="star"></i>
                    <h3>🎯 Điểm tâm đắc nhất</h3>
                    <p>Mình vô cùng tâm đắc với phần xây dựng Bộ nguyên tắc sử dụng AI có trách nhiệm. Nó như một chiếc "kim chỉ nam" giúp mình định hình phong cách làm việc chuyên nghiệp, liêm chính — điều mà mọi doanh nghiệp công nghệ lớn đều tìm kiếm ở các kỹ sư tương lai.</p>
                </div>

                <div class="summary-card">
                    <i data-lucide="rocket"></i>
                    <h3>🚀 Thách thức và bài học tương lai</h3>
                    <p><b>Thách thức lớn nhất:</b> Việc duy trì tính nhất quán trong thiết kế giao diện (UI) và việc phân tích sâu sắc bản chất của từng bài tập thay vì chỉ liệt kê kết quả một cách hời hợt.</p>
                    <p style="margin-top: 10px;"><b>Bài học cho tương lai:</b> Công nghệ số và AI thay đổi theo từng ngày. Kỹ năng quan trọng nhất không phải là thành thạo một công cụ cố định, mà là năng lực tự học (Meta-learning) và khả năng thích ứng linh hoạt trước mọi sự thay đổi của thế giới công nghệ.</p>
                </div>
            </div>
        </div>
    `,

    skills: () => `
        <div class="view">
            <div class="summary-grid">
                <div class="detail-block">
                    <h3><i data-lucide="code" style="display:inline; width:20px; height:20px; vertical-align:middle; margin-right:8px;"></i> Ngôn ngữ lập trình</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                        <span style="background: rgba(59,130,246,0.2); color: var(--text-accent); padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">Java</span>
                        <span style="background: rgba(59,130,246,0.2); color: var(--text-accent); padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">Python</span>
                    </div>
                </div>
                
                <div class="detail-block">
                    <h3><i data-lucide="layers" style="display:inline; width:20px; height:20px; vertical-align:middle; margin-right:8px;"></i> Framework & Thư viện</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                        <span style="background: rgba(139,92,246,0.2); color: #8b5cf6; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">JavaFX</span>
                    </div>
                </div>

                <div class="detail-block">
                    <h3><i data-lucide="tool" style="display:inline; width:20px; height:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ & Môi trường</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                        <span style="background: rgba(16,185,129,0.2); color: #10b981; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">Git / GitHub</span>
                        <span style="background: rgba(16,185,129,0.2); color: #10b981; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">VS Code</span>
                        <span style="background: rgba(16,185,129,0.2); color: #10b981; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">IntelliJ IDEA</span>
                        <span style="background: rgba(16,185,129,0.2); color: #10b981; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">Figma</span>
                    </div>
                </div>

                <div class="detail-block">
                    <h3><i data-lucide="message-circle" style="display:inline; width:20px; height:20px; vertical-align:middle; margin-right:8px;"></i> Kỹ năng mềm</h3>
                    <ul style="margin-top: 15px; padding-left: 20px; color: var(--text-secondary); line-height: 1.8;">
                        <li>Tư duy giải quyết vấn đề (Problem Solving)</li>
                        <li>Làm việc nhóm (Teamwork) & Giao tiếp hiệu quả</li>
                        <li>Kỹ năng tự học và nghiên cứu công nghệ mới</li>
                        <li>Sử dụng thành thạo các công cụ AI hỗ trợ lập trình</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    contact: () => `
        <div class="view">
            <div style="max-width: 600px; margin: 0 auto;">
                <div class="detail-block" style="text-align: center; padding: 40px 20px;">
                    <div style="width: 80px; height: 80px; background: rgba(59,130,246,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px solid var(--text-accent);">
                        <i data-lucide="mail" style="width: 40px; height: 40px; color: var(--text-accent);"></i>
                    </div>
                    <h2 style="font-size: 2rem; margin-bottom: 10px;">Kết nối với tôi</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 30px;">Tôi luôn sẵn sàng cho những cơ hội học tập và hợp tác mới. Đừng ngần ngại liên hệ!</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
                        <a href="mailto:laquocsu2605@gmail.com" style="display: flex; align-items: center; gap: 10px; color: var(--text-primary); text-decoration: none; padding: 12px 24px; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 8px; width: 100%; justify-content: center; transition: all 0.2s;">
                            <i data-lucide="mail"></i> laquocsu2605@gmail.com
                        </a>
                        <a href="https://github.com/lasusu-dlibe" target="_blank" style="display: flex; align-items: center; gap: 10px; color: var(--text-primary); text-decoration: none; padding: 12px 24px; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 8px; width: 100%; justify-content: center; transition: all 0.2s;">
                            <i data-lucide="github"></i> github.com/lasusu-dlibe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
};

// ==========================================
// App Logic
// ==========================================

const contentArea = document.getElementById('content-area');
const headerTitle = document.getElementById('header-title');
const menuBtns = document.querySelectorAll('.menu-btn[data-target]');
const themeToggle = document.getElementById('theme-toggle');

const titles = {
    home: "Sử Portfolio - Digital Journey",
    projects: "Danh sách Dự án & Bài tập",
    summary: "Tổng kết Hành trình",
    skills: "Kỹ năng chuyên môn",
    contact: "Thông tin liên hệ"
};

// Initialize app
function init() {
    // Re-initialize Lucide icons
    lucide.createIcons();
    
    // Load Home view by default
    navigate('home');

    // Setup event listeners
    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            navigate(target);
        });
    });

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Navigation Function
function navigate(target) {
    // Update active button
    menuBtns.forEach(btn => {
        if(btn.getAttribute('data-target') === target) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Header Title
    headerTitle.textContent = titles[target] || "Sử Portfolio";

    // Load Content
    if (views[target]) {
        contentArea.innerHTML = views[target]();
    } else {
        contentArea.innerHTML = '<div class="view"><h2>Page Not Found</h2></div>';
    }

    // Re-render icons in newly added DOM
    lucide.createIcons();
    
    // Scroll to top
    contentArea.scrollTop = 0;
}

// Global function to load project details (called from inline onclick)
window.loadProjectDetail = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        // Deselect all menu buttons as we are in a sub-view
        menuBtns.forEach(btn => btn.classList.remove('active'));
        // Keep "Dự án" somewhat active or just leave it
        document.querySelector('.menu-btn[data-target="projects"]').classList.add('active');
        
        headerTitle.textContent = `Chi tiết dự án: ${project.title}`;
        contentArea.innerHTML = views.projectDetail(project);
        lucide.createIcons();
        contentArea.scrollTop = 0;
    }
};

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    
    // Update button text and icon
    if (isLight) {
        themeToggle.innerHTML = '<i data-lucide="sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i data-lucide="moon"></i> Dark Mode';
    }
    lucide.createIcons();
}

// Start App
document.addEventListener('DOMContentLoaded', init);
