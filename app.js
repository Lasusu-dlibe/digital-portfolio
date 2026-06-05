// ==========================================
// Data
// ==========================================
const projectsData = [
    {
        id: "01",
        title: "BÀI 1: THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC",
        shortDesc: "Thiết lập cấu trúc thư mục tối ưu và quy tắc đặt tên tệp khoa học để quản trị tài nguyên số của dự án nhóm.",
        icon: "folder",
        file: "week1.pdf",
        contentHtml: `
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="target" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Mục tiêu</h3>
                <p>Làm chủ các kỹ năng cốt lõi trong quản trị hệ thống tập tin cục bộ trên hệ điều hành Windows 11; xây dựng quy chuẩn đặt tên và tổ chức dữ liệu một cách khoa học để tối ưu hóa hiệu suất làm việc, chuẩn bị cho các dự án lập trình phần mềm phức tạp trong tương lai.</p>
            </div>
            
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="tool" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Công cụ sử dụng</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li>Hệ điều hành Windows 11 File Explorer.</li>
                    <li>Công cụ lưu trữ đám mây OneDrive (để đồng bộ hóa dữ liệu cá nhân).</li>
                </ul>
            </div>
            
            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="activity" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Quá trình thực hiện & Kết quả đạt được</h3>
                <p style="margin-bottom: 10px;">Quy trình thực hành được thực hiện tuần tự và chuẩn hóa qua các bước logic sau:</p>
                <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li><b>Bước 1 (Khởi tạo không gian làm việc):</b> Truy cập vào thư mục Documents trên OneDrive cá nhân, thực hiện click chuột phải chọn New -> Folder để tạo thư mục gốc.</li>
                    <li><b>Bước 2 (Đặt tên chuẩn hóa):</b> Tiến hành đặt tên cho thư mục mới theo đúng định dạng định danh cá nhân: ThucHanh_Lã Quốc Sử.</li>
                    <li><b>Bước 3 (Tạo lập tệp tin thô):</b> Truy cập vào bên trong thư mục vừa tạo, sử dụng lệnh New -> Text Document để khởi tạo một tệp văn bản thô .txt mặc định.</li>
                    <li><b>Bước 4 (Đổi tên & Phân loại dữ liệu):</b> Sử dụng tính năng Rename (F2) trên thanh công cụ Windows 11 để đổi tên tệp tin ban đầu thành GhiChu.txt. Sau đó, tiến hành nâng cấp nội dung và điều chỉnh tên thành GhiChuQuanTrong.txt nhằm thể hiện mức độ ưu tiên của dữ liệu.</li>
                    <li><b>Bước 5 (Xây dựng cấu trúc thư mục phân cấp):</b> Tiếp tục sử dụng lệnh New -> Folder để tạo một thư mục con cấp hai có tên là TaiLieu nằm bên trong thư mục gốc, phục vụ cho việc bao đóng và phân loại dữ liệu.</li>
                    <li><b>Bước 6 (Thao tác Sao chép - Copy/Paste):</b> Click chọn tệp GhiChuQuanTrong.txt, sử dụng tổ hợp phím hệ thống Ctrl + C (hoặc icon Copy trên context menu) để sao chép, sau đó truy cập vào folder TaiLieu và nhấn Ctrl + V để nhân bản tệp tin.</li>
                    <li><b>Bước 7 (Thao tác Di chuyển - Cut/Paste):</b> Quay trở lại thư mục gốc, tạo thêm một tệp tin mới có tên là DiChuyen.txt. Sử dụng lệnh Cut (Ctrl + X) để cắt tệp tin này, sau đó truy cập vào folder TaiLieu và nhấn Ctrl + V để di chuyển hoàn toàn tệp vào không gian lưu trữ mới.</li>
                </ul>
                
                <h4 style="margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); text-transform: uppercase;">🖥️ CẤU TRÚC CÂY THƯ MỤC SAU KHI HOÀN THÀNH THỰC HÀNH:</h4>
                <div class="prompt-box">📂 Documents (OneDrive - Personal)/
└── 📂 ThucHanh_Lã Quốc Sử/
    ├── 📄 GhiChuQuanTrong.txt (File gốc)
    └── 📂 TaiLieu/
        ├── 📄 GhiChuQuanTrong.txt (Bản sao chép)
        └── 📄 DiChuyen.txt (Bản di chuyển từ folder gốc)</div>
            </div>

            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="image" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Minh chứng thực tế từ hệ thống (Ảnh chụp màn hình)</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li><b>Ảnh 1:</b> Thao tác click chuột phải chọn New -> Folder trong thư mục Documents.</li>
                    <li><b>Ảnh 2:</b> Thư mục ThucHanh_Lã Quốc Sử được khởi tạo thành công trên hệ thống.</li>
                    <li><b>Ảnh 3:</b> Thao tác tạo tệp tin văn bản thô Text Document bên trong thư mục gốc.</li>
                    <li><b>Ảnh 4:</b> Sử dụng tính năng Rename để đổi tên tệp tin thành GhiChu.txt.</li>
                    <li><b>Ảnh 5:</b> Khởi tạo thư mục con cấp hai mang tên TaiLieu.</li>
                    <li><b>Ảnh 6 & 7:</b> Quy trình thực hiện lệnh Sao chép (Ctrl + C) tệp GhiChuQuanTrong.txt và Dán (Ctrl + V) vào bên trong thư mục TaiLieu.</li>
                    <li><b>Ảnh 8, 9 & 10:</b> Thao tác tạo mới tệp DiChuyen.txt và dùng lệnh Di chuyển dữ liệu để đưa tệp vào folder đích.</li>
                </ul>
                <p style="font-style: italic; font-size: 0.9rem; margin-top: 10px; color: var(--text-secondary);">(Ghi chú: Tại mục này, bạn có thể tự chèn các thẻ <code>&lt;img&gt;</code> tương ứng với các ảnh chụp màn hình vào file <code>app.js</code> sau này).</p>
            </div>

            <div class="detail-block">
                <h3 style="color: var(--text-accent); margin-bottom: 10px;"><i data-lucide="alert-triangle" style="display:inline; width:20px; vertical-align:middle; margin-right:8px;"></i> Khó khăn & Bài học rút ra từ thực nghiệm</h3>
                <p><b>Khó khăn gặp phải:</b> Giao diện Context Menu mới của Windows 11 đã ẩn bớt các dòng chữ lệnh truyền thống (như Copy, Paste, Rename) và thay thế hoàn toàn bằng các biểu tượng icon nằm ở thanh công cụ phía trên. Điều này ban đầu gây ra một chút bỡ ngỡ trong việc định vị nhanh thao tác. Ngoài ra, việc quản lý phần mở rộng của tệp tin (.txt) nếu không bật chế độ "File name extensions" trong mục View rất dễ dẫn đến lỗi đặt tên sai định dạng (ví dụ: DiChuyen.txt.txt).</p>
                <p style="margin-top: 10px; margin-bottom: 5px;"><b>Bài học rút ra (Tư duy Kỹ thuật):</b></p>
                <ol style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li><b>Làm chủ phím tắt hệ thống:</b> Việc sử dụng thành thạo các tổ hợp phím nóng như F2 (Đổi tên), Ctrl + C / Ctrl + X / Ctrl + V giúp tối ưu hóa tốc độ tương tác với hệ điều hành nhanh hơn 50% so với việc click chuột thủ công.</li>
                    <li><b>Tầm quan trọng của tổ chức cấu trúc dữ liệu:</b> Đối với một developer, kỹ năng tổ chức cây thư mục mạch lạc, phân cấp rõ ràng ngay trên máy tính cá nhân chính là bước tập dượt quan trọng để quản lý các package, source code và module mã nguồn trong các dự án phần mềm lớn sau này, tránh việc thất lạc cấu trúc cấu hình hệ thống.</li>
                </ol>
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
                <p style="margin-top: 10px; font-style: italic; color: var(--text-secondary);">[HÌNH ẢNH MINH HỌA: BẢNG PHÂN CÔNG VÀ TIẾN ĐỘ TRÊN TRELLO/EXCEL] (Đính kèm trong tài liệu)</p>
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
                <p style="margin-top: 10px; font-style: italic; color: var(--text-secondary);">[SẢN PHẨM HOÀN THIỆN: ẢNH VÀ INFOGRAPHIC] (Hình ảnh bộ não mạch điện và file thiết kế Infographic đính kèm trong tài liệu)</p>
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
        <div class="view home-view">
            <div class="hero-section">
                <div class="hero-text">
                    <h1 class="home-title">
                        <i data-lucide="pin" class="hero-icon"></i> CHÀO MỪNG ĐẾN VỚI
                        <br>
                        <span class="gradient-text">DIGITAL PORTFOLIO CỦA TÔI</span>
                    </h1>
                    <p class="hero-subtitle">Một không gian lưu trữ, học tập và định hình tư duy công nghệ trong kỷ nguyên số.</p>
                </div>
                <div class="hero-image">
                    <img src="files/images/cyberpunk_laptop.png" alt="Cyberpunk Tech">
                </div>
            </div>

            <div class="detail-block cyber-card card-purple">
                <div class="cyber-decor"></div>
                <h3 class="card-title-neon text-purple">
                    <i data-lucide="user"></i> THÔNG TIN HỌC THUẬT NỀN TẢNG
                </h3>
                <ul class="cyber-list">
                    <li><span>○</span> <b>Họ và tên:</b> Lã Quốc Sử</li>
                    <li><span>○</span> <b>Mã sinh viên:</b> 25020354</li>
                    <li><span>○</span> <b>Ngành học:</b> Công nghệ thông tin (Information Technology)</li>
                    <li><span>○</span> <b>Lớp học phần:</b> IT1-K70 - Khoa Công nghệ thông tin</li>
                    <li><span>○</span> <b>Cơ sở đào tạo:</b> Trường Đại học Công nghệ – Đại học Quốc gia Hà Nội (VNU-UET)</li>
                    <li><span>○</span> <b>Học phần nghiên cứu:</b> Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo (Mã môn: UET.A14)</li>
                </ul>
            </div>

            <div class="detail-block cyber-card card-pink">
                <div class="cyber-decor"></div>
                <h3 class="card-title-neon text-pink">
                    <i data-lucide="target"></i> MỤC TIÊU HỌC TẬP & KHÁT VỌNG NGHỀ NGHIỆP
                </h3>
                <p style="color: var(--text-secondary); margin-bottom: 15px; line-height: 1.6;">Là một sinh viên đang theo học ngành Công nghệ thông tin tại môi trường học thuật UET, tôi luôn nhận thức sâu sắc rằng sự bùng nổ của kỷ nguyên số và trí tuệ nhân tạo (AI) đã tái định hình hoàn toàn tiêu chuẩn của một kỹ sư phần mềm. Một lập trình viên hiện đại không chỉ đơn thuần là một bộ máy gõ code (coder), mà phải là một người có tư duy hệ thống, biết sử dụng công nghệ số để tối ưu hóa quy trình và giải quyết các bài toán thực tế một cách thông minh.</p>
                <ul class="cyber-list">
                    <li><span>○</span> <b>Mục tiêu học tập ngắn hạn:</b> Trong suốt quá trình đào tạo tại nhà trường, tôi tập trung cao độ vào việc làm chủ các nguyên lý nền tảng của Lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật thông qua ngôn ngữ Java. Song song với đó, tôi tích cực rèn luyện kỹ năng xây dựng giao diện đồ họa người dùng với JavaFX và ứng dụng nâng cao kỹ nghệ Prompt Engineering để biến AI tạo sinh thành một "trợ lý lập trình ảo" đắc lực, hỗ trợ trong việc giải thích mã nguồn, tối ưu thuật toán và tăng tốc gỡ lỗi (debug).</li>
                    <li><span>○</span> <b>Định hướng phát triển dài hạn:</b> Sau khi tốt nghiệp và nhận tấm bằng Kỹ sư Công nghệ thông tin chuẩn mực tại UET, tôi định hướng bản thân phát triển trở thành một Kỹ sư phần mềm toàn diện (Software Engineer / Full-Stack Developer). Tôi khát khao được cống hiến trong các dự án phần mềm quy mô lớn tại các doanh nghiệp công nghệ, nơi tôi có thể kết hợp nhuần nhuyễn giữa tư duy kỹ thuật hệ thống chặt chẽ với bộ khung đạo đức AI có trách nhiệm nhằm tạo ra các sản phẩm công nghệ minh bạch, bảo mật và mang lại giá trị bền vững cho xã hội.</li>
                </ul>
            </div>

            <div class="detail-block cyber-card card-blue">
                <div class="cyber-decor"></div>
                <h3 class="card-title-neon text-blue">
                    <i data-lucide="monitor"></i> LÝ DO XÂY DỰNG & MỤC TIÊU CỦA DIGITAL PORTFOLIO
                </h3>
                <p style="color: var(--text-secondary); margin-bottom: 15px; line-height: 1.6;">Đối với một sinh viên CNTT, việc tích lũy kiến thức qua sách vở hay lưu trữ tài liệu theo phương thức truyền thống đã không còn bắt kịp tốc độ thay đổi chóng mặt của công nghệ số. Việc tự tay thiết lập và xây dựng không gian Digital Portfolio cá nhân này bằng mã nguồn sạch (Semantic HTML/CSS) kết hợp quản trị kho lưu trữ qua Git/GitHub chính là minh chứng thực tế nhất cho năng lực số ứng dụng của bản thân, hướng tới hai mục tiêu cốt lõi:</p>
                <ul class="cyber-list">
                    <li><span>○</span> <b>Hệ thống hóa minh chứng năng lực số thực tế:</b> Trang Portfolio số này đóng vai trò như một "hồ sơ năng lực động" (Dynamic Portfolio), lưu trữ một cách trực quan, minh bạch và khoa học toàn bộ quy trình thực hiện của 6 tuần bài tập thành phần. Từ khâu quản lý cấu trúc tệp tin (Bài 1), lọc thông tin học thuật (Bài 2), kỹ thuật Prompt Engineering nâng cao (Bài 3), điều phối dự án nhóm theo mô hình Kanban (Bài 4), sáng tạo nội dung đa phương tiện (Bài 5) cho đến việc xây dựng bộ quy tắc liêm chính học thuật (Bài 6). Tất cả đều được trình bày rõ ràng, dễ tiếp cận và có tính đối soát cao theo đúng rubric đánh giá của trường.</li>
                    <li><span>○</span> <b>Khẳng định năng lực tư duy phản biện và tự học:</b> Thay vì chỉ trưng bày các sản phẩm cuối cùng một cách hời hợt, nội dung portfolio tập trung phân tích sâu sắc vào các bài học kinh nghiệm, những khó khăn thực tế và giải pháp công nghệ sáng tạo đã được áp dụng để giải quyết thách thức. Qua đó thể hiện năng lực tự phản tỉnh (self-reflection) và khả năng thích ứng linh hoạt trước các công cụ công nghệ mới – đây chính là chìa khóa vàng giúp một lập trình viên liên tục nâng cấp bản thân trong kỷ nguyên số.</li>
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

    projectDetail: (project) => {
        const fileExt = project.file ? project.file.split('.').pop().toLowerCase() : '';
        const canPreview = fileExt === 'pdf' || fileExt === 'docx' || fileExt === 'doc';
        
        return `
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
                    <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                        ${project.file ? `<a href="files/${project.file}" download class="btn-file-viewer"><i data-lucide="download" style="width: 16px; height: 16px;"></i> Tải file</a>` : ''}
                    </div>
                </div>
            </div>

            ${canPreview ? `
            <div class="file-viewer-container" id="file-viewer-${project.id}">
                <div class="file-viewer-header">
                    <div class="file-viewer-title">
                        <i data-lucide="file-text" style="width: 18px; height: 18px;"></i>
                        <span>${project.file}</span>
                    </div>
                    <div class="file-viewer-actions">
                        <a href="files/${project.file}" download class="file-viewer-btn" title="Tải xuống">
                            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
                        </a>
                        <a href="files/${project.file}" target="_blank" class="file-viewer-btn" title="Mở tab mới">
                            <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
                        </a>
                    </div>
                </div>
                <div class="file-viewer-body">
                    <div class="file-viewer-loading" id="file-loading-${project.id}">
                        <div class="file-viewer-spinner"></div>
                        <span>Đang tải tài liệu...</span>
                    </div>
                    ${fileExt === 'pdf' ? `
                    <iframe 
                        id="file-iframe-${project.id}"
                        class="file-viewer-iframe"
                        src="files/${project.file}"
                        frameborder="0"
                        allowfullscreen
                        onload="document.getElementById('file-loading-${project.id}').style.display='none';"
                    ></iframe>
                    ` : `
                    <style>
                        #docx-container-${project.id} * {
                            color: #000 !important;
                            text-shadow: none !important;
                        }
                    </style>
                    <div id="docx-container-${project.id}" class="docx-viewer-container"></div>
                    `}
                </div>
            </div>
            ` : ''}

            <div class="project-html-content" style="display: flex; flex-direction: column; gap: 24px;">
                ${project.contentHtml}
            </div>
        </div>
    `;
    },

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
    summary: "Tổng kết Hành trình"
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
        
        // Render docx file if applicable
        if (project.file) {
            const fileExt = project.file.split('.').pop().toLowerCase();
            if (fileExt === 'docx' || fileExt === 'doc') {
                renderDocxFile(project);
            }
        }
    }
};

// Render DOCX file using docx-preview library
function renderDocxFile(project) {
    const container = document.getElementById(`docx-container-${project.id}`);
    const loading = document.getElementById(`file-loading-${project.id}`);
    
    if (!container) return;
    
    fetch(`files/${project.file}`)
        .then(response => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.arrayBuffer();
        })
        .then(arrayBuffer => {
            if (loading) loading.style.display = 'none';
            // docx object comes from docx-preview.min.js
            return docx.renderAsync(arrayBuffer, container, null, {
                className: 'docx-preview',
                inWrapper: true,
                ignoreWidth: false,
                ignoreHeight: false,
                ignoreFonts: false,
                breakPages: true,
                useBase64URL: true,
                renderHeaders: true,
                renderFooters: true,
                renderFootnotes: true,
            });
        })
        .catch(err => {
            console.error('Error rendering DOCX:', err);
            if (loading) {
                loading.style.display = 'flex'; // Show loading container again to display error
                loading.innerHTML = `
                    <i data-lucide="alert-circle" style="width: 40px; height: 40px; color: #ef4444; margin-bottom: 10px;"></i>
                    <span style="color: #ef4444; text-align: center; padding: 0 20px;">Lỗi không thể tải hoặc hiển thị tài liệu này (${err.message}).<br><br><a href="files/${project.file}" download style="color: var(--text-accent); text-decoration: underline;">Nhấp vào đây để tải file về máy</a>.</span>
                `;
                lucide.createIcons();
            }
        });
}


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
