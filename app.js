// ==========================================
// Data
// ==========================================
const projectsData = [
    {
        id: "01",
        title: "BÀI 1: THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC",
        shortDesc: "Thiết lập cấu trúc thư mục tối ưu và quy tắc đặt tên tệp khoa học để quản trị tài nguyên số của dự án nhóm.",
        icon: "folder",
        file: "week1.zip",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Thiết lập cấu trúc thư mục tối ưu và quy tắc đặt tên tệp (Naming Convention) khoa học để quản trị tài nguyên số của dự án nhóm, loại bỏ hoàn toàn việc nhầm lẫn các phiên bản trong quá trình làm việc chung.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Hệ điều hành Windows 11 File Explorer.</li>
                    <li>Không gian lưu trữ đám mây Google Drive (Google Workspace).</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Quá trình:</b> Với vai trò Trưởng nhóm Kỹ thuật, tôi đã phân chia dữ liệu dự án thành cấu trúc 3 cấp rõ ràng. Đồng thời áp dụng quy chuẩn đặt tên tệp nghiêm ngặt theo định dạng: <code>YYYYMMDD_FileName_Version</code>.</p>
                <p style="margin-top: 10px;"><b>Sản phẩm cuối cùng:</b> Hệ thống thư mục logic giúp nhóm 5 thành viên truy cập và đồng bộ tài nguyên tức thì trong 1 tuần cao điểm của dự án.</p>
                
                <h4 style="margin-top: 15px; color: var(--text-primary);">[HÌNH ẢNH MINH HỌA: CẤU TRÚC THƯ MỤC DỰ ÁN]</h4>
                <figure>
                    <img src="files/images/week1_anh1.png" onerror="this.style.display='none'">
                    <figcaption>Cấu trúc thư mục được quy chuẩn</figcaption>
                </figure>
                <figure>
                    <img src="files/images/week1_anh2.png" onerror="this.style.display='none'">
                    <figcaption>Chi tiết thư mục dự án</figcaption>
                </figure>
                <div class="prompt-box">📂 Drive của tôi > [2026]_AI_Impact_Marketing
├── 📂 01_Quản_trị_Dự_án
├── 📂 02_Nghiên_cứu_Nội_dung
├── 📂 03_Tư_liệu_Video
├── 📂 04_Sản_phẩm_Cuối</div>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Ban đầu các thành viên quen lưu tệp bừa bãi và đặt tên tùy ý (ví dụ: video_final.mp4, script_moi.docx), gây xung đột phiên bản.<br><br>
                <b>Bài học:</b> Tổ chức dữ liệu khoa học và thống nhất quy chuẩn đặt tên ngay từ ngày đầu tiên là nền móng cốt lõi quyết định 50% sự thành công khi làm việc nhóm trong môi trường số.</p>
            </div>
        `
    },
    {
        id: "02",
        title: "BÀI 2: TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT",
        shortDesc: "Tìm kiếm, sàng lọc và đánh giá các tài liệu khoa học uy tín, có tính thời đại (giai đoạn 2023-2024).",
        icon: "search",
        file: "week2.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Tìm kiếm, sàng lọc và đánh giá các tài liệu khoa học uy tín, có tính thời đại (giai đoạn 2023-2024) để phục vụ bài báo cáo phân tích về chủ đề: "Tác động của AI tạo sinh đến kỹ năng tự học và tư duy phản biện của sinh viên".</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Google Scholar, ResearchGate, các toán tử tìm kiếm nâng cao (AND, site:, filetype:).</li>
                    <li>Mô hình ngôn ngữ lớn Google Gemini (đóng vai trò trợ lý nghiên cứu học thuật).</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Quá trình:</b> Sử dụng toán tử để quét và chọn ra 3 tài liệu uy tín từ UNESCO, IEEE và các tạp chí giáo dục quốc tế lớn. Nạp file gốc vào AI để thực hiện trích xuất mục tiêu, phương pháp và kết quả chính.</p>
                
                <p style="margin-top: 15px; font-weight: 600;">Danh mục tài liệu thu thập được:</p>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Cotton et al. (2023): ChatGPT in Higher Education: Considerations for Academic Integrity and Student Learning.</li>
                    <li>Kasneci et al. (2023): The Role of AI in Personalized Learning: A Review of ChatGPT’s Potential.</li>
                    <li>UNESCO (2023): Guidance for generative AI in education and research.</li>
                </ul>

                <h4 style="margin-top: 15px; color: var(--text-primary);">Bảng đối soát so sánh góc nhìn học thuật (Cross-Reference Matrix)</h4>
                <div class="responsive-table-wrapper">
                    <table>
                        <tr><th>Tiêu chí đối soát</th><th>Cotton et al. (2023)</th><th>Kasneci et al. (2023)</th><th>UNESCO (2023)</th></tr>
                        <tr><td>Trọng tâm chính</td><td>Nguy cơ về Liêm chính học thuật trong giáo dục đại học.</td><td>Mô hình học tập thích ứng và cá nhân hóa lộ trình.</td><td>Khung quản trị toàn cầu, đạo đức và chính sách cấp chính phủ.</td></tr>
                        <tr><td>Thái độ với AI</td><td>Lạc quan có kiểm soát (Xem AI là công cụ hỗ trợ).</td><td>Phản biện chuyên sâu (Sợ sinh viên lười tư duy).</td><td>Thận trọng & Minh bạch (Yêu cầu quy chuẩn đạo đức khắt khe).</td></tr>
                    </table>
                </div>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Các tài liệu học thuật quốc tế có dung lượng dài, nặng tính lý thuyết quản lý phương Tây và chưa tính đến các rào cản hạ tầng công nghệ tại nước đang phát triển như Việt Nam. AI đôi khi có hiện tượng "hallucinate" (bịa đặt) số liệu nhỏ nếu không kiểm soát chặt.<br><br>
                <b>Bài học:</b> AI rất mạnh trong việc đọc hiểu văn bản và trích xuất ý chính, nhưng con người phải đóng vai trò là "Người phản biện" để phát hiện lỗ hổng bối cảnh và xác thực chéo dữ liệu.</p>
            </div>
        `
    },
    {
        id: "03",
        title: "BÀI 3: VIẾT PROMPT HIỆU QUẢ CHO TÁC VỤ HỌC TẬP (PROMPT ENGINEERING)",
        shortDesc: "Nghiên cứu và tối ưu hóa các phiên bản câu lệnh (Prompt Engineering).",
        icon: "message-square",
        file: "week3.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Nghiên cứu và tối ưu hóa các phiên bản câu lệnh (Prompt Engineering) để biến AI từ một công cụ tra cứu thông thường thành một "chuyên gia lập trình" giải thích các khái niệm OOP phức tạp.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <p style="color: var(--text-secondary);">Mô hình AI: Google Gemini (Phiên bản Advanced).</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p>Tôi đã thực hiện thử nghiệm tối ưu hóa câu lệnh qua 3 phiên bản tăng dần về độ khó kỹ thuật cho tác vụ: Giải thích Tính Đa hình (Polymorphism) trong Java.</p>
                
                <h4 style="margin-top: 15px; color: var(--text-primary);">1. Phiên bản Prompt Cơ bản</h4>
                <pre><code class="prompt-box">"Giải thích tính đa hình trong Java là gì."</code></pre>
                <p style="margin-top: 5px;"><i>Kết quả AI trả về:</i> Cung cấp định nghĩa lý thuyết khô khan trích từ sách giáo khoa (Overloading, Overriding), code mẫu chung chung, rất khó tiếp thu đối với sinh viên mới học.</p>

                <h4 style="margin-top: 15px; color: var(--text-primary);">2. Phiên bản Prompt Cải tiến (Định hình cấu trúc & Đối tượng)</h4>
                <pre><code class="prompt-box">"Giải thích tính đa hình trong lập trình Java cho sinh viên năm nhất. Hãy trình bày theo cấu trúc: Định nghĩa, Phân loại (Overloading & Overriding) và cho ví dụ code đơn giản."</code></pre>
                <p style="margin-top: 5px;"><i>Kết quả AI trả về:</i> Cải thiện rõ rệt về mặt bố cục. AI đã biết hạ thấp độ khó của thuật ngữ để phù hợp với đối tượng "sinh viên năm nhất". Tuy nhiên, câu trả lời vẫn thiếu sự trực quan và mẹo thực tế.</p>

                <h4 style="margin-top: 15px; color: var(--text-primary);">3. Phiên bản Prompt Nâng cao (Tích hợp kỹ thuật Role + CoT + Few-shot)</h4>
                <pre><code class="prompt-advanced">"Bạn là một kỹ sư phần mềm cao cấp tại Google. Hãy giải thích khái niệm 'Tính Đa hình' cho một sinh viên đang gặp khó khăn trong việc hiểu OOP.

Quy trình suy nghĩ: Hãy dùng hình ảnh 'Chiếc điều khiển từ xa' hoặc 'Âm thanh của các loài vật' làm ẩn dụ. Sau đó phân tích tại sao đa hình lại giúp code linh hoạt hơn.

Yêu cầu: Trình bày bằng ngôn ngữ dễ hiểu, có ví dụ code Java chuẩn Clean Code và kết luận bằng 1 câu ghi nhớ."</code></pre>
                <p style="margin-top: 5px;"><i>Kết quả AI trả về:</i> Đạt mức Xuất sắc. AI sử dụng hình ảnh ẩn dụ "Chiếc điều khiển từ xa" cực kỳ trực quan. Code Java sinh ra đạt chuẩn Clean Code, có tính ứng dụng cao, giúp người học nắm bắt bản chất chỉ trong 1 lần đọc.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="bar-chart-2" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Phân tích vì sao Prompt nâng cao tốt hơn</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li><b>Kỹ thuật Đóng vai (Role-playing):</b> Ép AI truy cập vùng dữ liệu của một chuyên gia (Kỹ sư Google), giúp nâng tầm chiều sâu kiến thức và định hình tông giọng chuyên nghiệp.</li>
                    <li><b>Chuỗi tư duy (Chain-of-Thought):</b> Ràng buộc AI suy nghĩ theo các bước (Ẩn dụ -> Phân tích bản chất -> Viết code), giúp câu trả lời logic, không bị sót ý.</li>
                    <li><b>Giới hạn ngữ cảnh và Output:</b> Kiểm soát tuyệt đối định dạng đầu ra, tránh hiện tượng AI viết lan man lý thuyết dông dài.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Viết prompt nâng cao đòi hỏi bản thân người viết phải có tư duy logic tốt và biết rõ mình muốn gì, nếu không AI sẽ sinh ra kết quả rập khuôn.<br><br>
                <b>Bài học:</b> Chất lượng câu trả lời của AI tỷ lệ thuận với năng lực đặt câu hỏi và độ chi tiết của bối cảnh mà bạn cung cấp.</p>
            </div>
        `
    },
    {
        id: "04",
        title: "BÀI 4: SỬ DỤNG CÔNG CỤ HỢP TÁC TRỰC TUYẾN CHO DỰ ÁN NHÓM",
        shortDesc: "Thiết lập hạ tầng công nghệ số và điều phối tiến độ từ xa cho nhóm 5 người.",
        icon: "users",
        file: "week4.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Thiết lập hạ tầng công nghệ số và điều phối tiến độ từ xa cho nhóm 5 người, hoàn thành dự án làm video và báo cáo "AI đã tác động đến Marketing & Kinh doanh như thế nào" trong thời gian cao điểm 01 tuần.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li>Trello: Quản trị tác vụ theo phương pháp Kanban (Backlog, In Progress, Review, Done).</li>
                    <li>Discord: Trung tâm giao tiếp, chia kênh thảo luận chuyên biệt (#kịch-bản, #hậu-kỳ).</li>
                    <li>Google Workspace (Docs, Sheets, Drive): Đồng bộ và biên tập tài nguyên thời gian thực.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Quá trình:</b> Với vai trò Trưởng nhóm Kỹ thuật, tôi đã số hóa toàn bộ quy trình phân công công việc bằng sơ đồ Trello, tích hợp Automation để thông báo tự động khi một task chuyển trạng thái. Ứng dụng Google Calendar tích hợp Discord để nhắc nhở deadline tự động (Mention).</p>
                <p style="margin-top: 10px;"><b>Kết quả:</b> Nhóm hoàn thành toàn bộ kịch bản, quay dựng video dài 7 phút trước deadline 12 giờ. Bản thân tôi đã thực hiện hơn 15 lượt comment sửa bài trên Google Docs và soạn một bộ Prompt Library dùng chung cho đồng đội.</p>
                <p style="margin-top: 10px; font-weight: 600; color: var(--text-primary);">[HÌNH ẢNH MINH HỌA: BẢNG PHÂN CÔNG VÀ TIẾN ĐỘ TRÊN TRELLO/EXCEL]</p>
                <figure>
                    <img src="files/images/week4_image1.png" onerror="this.style.display='none'">
                    <figcaption>Trello quản trị tác vụ trực quan</figcaption>
                </figure>
                <figure>
                    <img src="files/images/week4_image2.png" onerror="this.style.display='none'">
                    <figcaption>Bảng phân công chi tiết</figcaption>
                </figure>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Các thành viên học tại UET có lịch dày đặc, việc quay phim tại 5 địa điểm khác nhau dẫn đến chất lượng âm thanh, ánh sáng bị lệch.<br><br>
                <b>Giải pháp số hóa:</b> Tôi đã hướng dẫn nhóm dùng công cụ AI Audio Enhancement để chuẩn hóa giọng nói và thiết lập một Master Template trên CapCut để đồng bộ hóa sản phẩm.<br><br>
                <b>Bài học:</b> Công cụ số giúp tối ưu hóa 70% hiệu suất làm việc nhóm, nhưng sự minh bạch và tính kỷ luật của các thành viên mới là yếu tố quyết định.</p>
            </div>
        `
    },
    {
        id: "05",
        title: "BÀI 5: SỬ DỤNG AI TẠO SINH ĐỂ HỖ TRỢ SÁNG TẠO NỘI DUNG",
        shortDesc: "Ứng dụng chuỗi liên hoàn các công cụ Generative AI để sản xuất dự án cẩm nang phương pháp học tập.",
        icon: "image",
        file: "week5.docx",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Ứng dụng chuỗi liên hoàn các công cụ Generative AI (Văn bản -> Hình ảnh -> Thiết kế) để sản xuất dự án: "Cẩm nang phương pháp học tập chủ động cho sinh viên công nghệ" (Sản phẩm gồm bài viết chuyên sâu và Infographic).</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary);">
                    <li><b>Google Gemini:</b> Lên ý tưởng, lập dàn ý chi tiết bài viết.</li>
                    <li><b>DALL-E 3 / Midjourney:</b> Tạo hình ảnh minh họa nghệ thuật kỹ thuật số (Digital Art).</li>
                    <li><b>Canva AI (Magic Design):</b> Hỗ trợ dàn trang Infographic tự động.</li>
                </ul>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p><b>Bước 1 (Nội dung):</b> Sử dụng prompt đóng vai chuyên gia giáo dục trên Gemini để lên dàn ý 5 phần về phương pháp Spaced Repetition. Tôi tự tinh chỉnh bằng cách chèn thêm ví dụ thực tế về việc "Học các hàm trong Java".<br>
                <b>Bước 2 (Hình ảnh):</b> Dùng DALL-E 3 tạo ra artwork mô tả "não bộ kết nối bằng mạch điện xanh" tượng trưng cho AI và tốc độ học tập.<br>
                <b>Bước 3 (Thiết kế):</b> Đẩy dữ liệu vào Canva Magic Design, chọn bộ font không chân (Sans-serif) hiện đại để tối ưu hóa trải nghiệm đọc trên thiết bị số.</p>
                <p style="margin-top: 15px; font-weight: 600; color: var(--text-primary);">[SẢN PHẨM HOÀN THIỆN: ẢNH VÀ INFOGRAPHIC]</p>
                <figure>
                    <img src="files/images/week5_image1.png" onerror="this.style.display='none'">
                    <figcaption>Hình ảnh AI tạo sinh cho thiết kế trực quan</figcaption>
                </figure>
                <figure>
                    <img src="files/images/week5_image2.png" onerror="this.style.display='none'">
                    <figcaption>Dàn trang thiết kế chuyên nghiệp với AI</figcaption>
                </figure>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra</h3>
                <p><b>Khó khăn:</b> Đầu ra của AI tạo hình ảnh đôi khi màu sắc bị tối hoặc khó kiểm soát các chi tiết nhỏ. Thông tin văn bản của AI đôi khi mang tính lý thuyết thuần túy.<br><br>
                <b>Bài học (Tư duy phối hợp):</b> Quy trình sáng tạo truyền thống mang tính tuyến tính (Viết -> Vẽ -> Thiết kế), nhưng với AI, quy trình trở thành song song, giúp rút ngắn thời gian từ 3 ngày xuống còn 4 tiếng. Trong đó, AI đóng vai trò "Trợ lý thực thi" (40% khối lượng), con người đóng vai trò "Biên tập viên thẩm mỹ" kiểm định (60%).</p>
            </div>
        `
    },
    {
        id: "06",
        title: "BÀI 6: SỬ DỤNG AI CÓ TRÁCH NHIỆM TRONG HỌC TẬP VÀ NGHIÊN CỨU",
        shortDesc: "Nghiên cứu quy chế liêm chính học thuật của UET và xây dựng bộ khung đạo đức cá nhân.",
        icon: "shield",
        file: "week6.pdf",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Nghiên cứu quy chế liêm chính học thuật của Đại học Công nghệ (UET) và xây dựng bộ khung đạo đức cá nhân nhằm khai thác sức mạnh của AI một cách minh bạch, an toàn.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="eye" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Phân tích các vấn đề đạo đức AI dưới góc nhìn sinh viên IT</h3>
                <p><b>Ranh giới giữa hỗ trợ và gian lận:</b> AI là một "tutor" tuyệt vời khi nó giải thích lỗi code hoặc gợi ý ý tưởng; nhưng nó trở thành công cụ gian lận khi sinh viên copy-paste nguyên văn mã nguồn hoặc bài luận để nộp mà không hiểu logic bên dưới.</p>
                <p style="margin-top: 10px;"><b>Đạo văn ý tưởng (Idea Plagiarism):</b> AI tạo ra nội dung dựa trên bộ dữ liệu huấn luyện khổng lồ của nhiều tác giả. Việc nhận hoàn toàn ý tưởng của AI là của mình mà không khai báo là hành vi vi phạm liêm chính.</p>
                <p style="margin-top: 10px;"><b>Hệ lụy thui chột kỹ năng:</b> Quá lạm dụng AI sẽ khiến sinh viên IT mất khả năng viết code căn bản, gặp khủng hoảng khi phải phỏng vấn lập trình trực tiếp (Coding Live) với nhà tuyển dụng.</p>
            </div>
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="check-circle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Bộ nguyên tắc cá nhân khi sử dụng AI của Lã Quốc Sử (5 Tiêu chuẩn vàng)</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li><b>Nguyên tắc 70/30:</b> Chỉ sử dụng AI tối đa cho 30% khối lượng công việc (gợi ý khung, sửa ngữ pháp, brainstorm), 70% còn lại bắt buộc phải là thực thi, viết mã và kiểm chứng bằng tư duy độc lập của cá nhân.</li>
                    <li><b>Kiểm chứng kép (Double-check):</b> Tuyệt đối không tin tưởng hoàn toàn vào dữ liệu của AI. Phải luôn chạy thử code trên IDE thực tế và đối chiếu kiến thức với tài liệu giáo trình chính thống để loại bỏ lỗi module hoặc thông tin sai lệch.</li>
                    <li><b>Minh bạch tuyệt đối (Transparent Citation):</b> Luôn khai báo rõ ràng trong mọi bài tập/dự án nộp về trường. Định dạng trích dẫn chuẩn mực: "Nội dung được hỗ trợ bởi [Tên AI] vào ngày [Ngày/Tháng/Năm] ở khâu lập dàn ý...".</li>
                    <li><b>Hỏi để hiểu, không hỏi để chép:</b> Đổi chiến lược viết prompt. Thay vì ra lệnh "Hãy làm hộ tôi bài này", tập trung vào các câu hỏi hỏi về bản chất cơ chế: "Tại sao đoạn code này chạy lỗi?", "Thuật toán này vận hành thế nào?".</li>
                    <li><b>Bảo mật dữ liệu hệ thống:</b> Tuyệt đối không tải các mã nguồn cốt lõi của dự án phần mềm chưa công bố, hoặc các thông tin dữ liệu cá nhân nhạy cảm lên các mô hình AI công cộng để tránh rò rỉ dữ liệu.</li>
                </ul>
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
                    <p>Hành trình xây dựng Digital Portfolio cho môn học này mang lại cho tôi một trải nghiệm học thuật thực sự bùng nổ. Đối với một sinh viên ngành Công nghệ thông tin tại UET, việc không chỉ học lý thuyết mà được trực tiếp ứng dụng các hệ sinh thái công cụ số (Trello, Drive, Gemini, Canva AI...) để hoàn thiện một sản phẩm website cá nhân hoàn chỉnh giúp tôi nhìn rõ bức tranh toàn cảnh về năng lực số cần có trong thời đại mới.</p>
                </div>
                
                <div class="summary-card">
                    <i data-lucide="book-open"></i>
                    <h3>🧠 Kiến thức & Kỹ năng quan trọng nhất</h3>
                    <ul>
                        <li><b>Làm chủ kỹ nghệ Prompting chuyên sâu:</b> Học được cách giao tiếp với máy tính bằng tư duy logic, áp dụng nhuần nhuyễn các kỹ thuật nâng cao (Role, Chain-of-Thought) để bắt AI phải trả về kết quả tối ưu nhất cho học tập.</li>
                        <li><b>Năng lực điều phối và quản trị số:</b> Tư duy quản trị công việc bằng mô hình Kanban trên Trello và chia luồng thông tin trên Discord giúp tôi nâng cao kỹ năng lãnh đạo kỹ thuật (Technical Leadership) khi làm việc nhóm.</li>
                        <li><b>Tư duy phản biện trước công nghệ:</b> Nhìn nhận AI bằng lăng kính khách quan, biết bóc tách điểm mạnh/điểm yếu của từng công cụ thay vì thần thánh hóa nó.</li>
                    </ul>
                </div>

                <div class="summary-card">
                    <i data-lucide="star"></i>
                    <h3>🎯 Điểm tâm đắc nhất</h3>
                    <p>Điều tôi tâm đắc nhất chính là việc xây dựng thành công Bộ nguyên tắc sử dụng AI có trách nhiệm. Trong kỷ nguyên số, một kỹ sư CNTT xuất sắc của UET không chỉ được định nghĩa bằng việc viết code nhanh ra sao, mà quan trọng hơn cả là ý thức về liêm chính học thuật và đạo đức nghề nghiệp.</p>
                </div>

                <div class="summary-card">
                    <i data-lucide="rocket"></i>
                    <h3>🚀 Thách thức và bài học tương lai</h3>
                    <p><b>Thách thức lớn nhất:</b> Vượt qua sự "ỷ lại" vào tốc độ giải quyết vấn đề của AI để ép bản thân phải tự suy nghĩ bản chất toán học/thuật toán trước khi tham khảo máy tính.</p>
                    <p style="margin-top: 10px;"><b>Bài học cho tương lai:</b> Công nghệ số thay đổi theo từng giờ (giống như bối cảnh năm 2026 hiện tại). Kỹ năng sống còn không phải là thành thạo một phần mềm cố định, mà là năng lực tự học nhanh (Agility) và tư duy thích ứng linh hoạt trước mọi làn sóng công nghệ mới. Portfolio này chính là bước đệm vững chắc đầu tiên của tôi trên con đường trở thành một kỹ sư CNTT toàn diện.</p>
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
