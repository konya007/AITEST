Chắc chắn rồi, đây là nội dung đã được trình bày lại bằng Markdown chuẩn, với hy vọng các công thức toán học sẽ hiển thị chính xác hơn trong môi trường hỗ trợ LaTeX:

---

**Trang 1**

HỌC SÂU VÀ
MẠNG NƠ-RON THẦN KINH
MINH QUANG LÊ

---

**Trang 2**

Một giá trị trung bình là một giá trị điển hình, hoặc đại diện, của một tập dữ liệu. Vì các giá trị điển hình như vậy có xu hướng nằm ở trung tâm của một tập dữ liệu được sắp xếp theo một xu hướng nhất định, nên các giá trị trung bình còn được gọi là các thước đo xu hướng trung tâm. Có thể định nghĩa nhiều loại thước đo xu hướng trung tâm, chẳng hạn như trung bình cộng, trung vị, mode, trung bình nhân, trung bình điều hòa, trung bình bình phương, trung bình cắt tỉa, trung bình winsorized, tứ phân vị, thập phân vị và bách phân vị. Mỗi loại có những ưu điểm và nhược điểm, tùy thuộc vào dữ liệu và mục đích dự kiến.

**Định nghĩa (Trung bình cộng):** Trung bình cộng, hay nói gọn là trung bình, của một tập hợp N số $v_1, v_2, ..., v_N$ được ký hiệu là $\bar{v}$ và được định nghĩa là:
$$ \bar{v} = \frac{v_1 + v_2 + ... + v_N}{N} = \frac{\sum_{j=1}^{N} v_j}{N} \quad (1.4) $$

Ví dụ, trung bình cộng của các số trong tập hợp
$h = \{133, 136, 149, 133, 123, 121, 140, 139, 117, 117, 136, 108, 126, 104, 116, 147, 140, 148, 150, 122, 135, 146, 133, 144, 117, 124, 135, 117, 120, 121, 110, 124, 103, 137, 101, 119, 104, 113, 139, 133\} \quad (1.5)$
là $\bar{v} = 127$. Trung bình hữu ích vì nó cho thấy "trọng tâm" tồn tại ở đâu đối với một tập hợp các giá trị quan sát được.

Nếu các số $v_1, v_2, ..., v_K$ xuất hiện với tần suất $f_1, f_2, f_3, ..., f_K$, (dữ liệu được nhóm), thì trung bình cộng là
$$ \bar{v} = \frac{f_1v_1 + f_2v_2 + ... + f_Kv_K}{f_1 + f_2 + ... + f_K} = \frac{\sum_{j=1}^{K}f_jv_j}{\sum_{j=1}^{K}f_j} = \frac{\sum_{j=1}^{K}f_jv_j}{N} \quad (1.6) $$
trong đó $\sum_{j=1}^{K}f_j = N$ là tổng tần suất. Ví dụ, nếu 5, 8, 6, và 2 xuất hiện với tần suất lần lượt là 3, 2, 4, và 1, thì trung bình cộng là $\bar{v} = \frac{(5)(3)+(8)(2)+(6)(4)+(2)(1)}{3+2+4+1} = 5.7$.

---

**Trang 3**

**Trung vị**

**Định nghĩa (Trung vị):** Trung vị của một tập hợp các số được sắp xếp theo thứ tự độ lớn (nghĩa là, trong một mảng) là giá trị ở giữa hoặc trung bình cộng của hai giá trị ở giữa. Đôi khi, trung vị được ký hiệu là $\tilde{v}$.
Nói một cách đơn giản, hãy sắp xếp các giá trị của một tập dữ liệu kích thước $n$ từ nhỏ nhất đến lớn nhất. Nếu $n$ lẻ, trung vị mẫu là giá trị ở vị trí $(n + 1)/2$; nếu $n$ chẵn, nó là trung bình của các giá trị ở vị trí $n/2$ và $n/2 + 1$ (xem Hình 1.4). Ví dụ, tập hợp các số 2, 5, 6, 9, và 11 có trung vị là 6, (xếp hạng $n = 5$ số đo từ nhỏ nhất đến lớn nhất: 2, 5, 6, 9, 11), tuy nhiên, tập hợp các số 2, 9, 11, 5, 6 và 27 có trung vị là $\frac{1}{2} (6 + 9) = 7.5$, (xếp hạng các số đo từ nhỏ nhất đến lớn nhất: 2, 5, 6, 9, 11, 27).

---

**Trang 4**

**Mode**

**Định nghĩa (Mode):** Mode của một tập hợp các số là giá trị xuất hiện với tần suất lớn nhất.
Ví dụ, tập hợp các số 2, 4, 7, 8, 8, 8, 10, 10, 11, 12 và 18 có mode là 8, tuy nhiên, tập hợp các số 2, 3, 8, 11, 12, 14, và 16 không có mode. Tập hợp 1, 2, 3, 3, 3, 5, 5, 5, 8, 8, và 9 có hai mode, 3 và 8.

**Định nghĩa (Quan hệ thực nghiệm):** Đối với các đường cong tần suất đơn mode bị lệch vừa phải (không đối xứng), chúng ta có quan hệ thực nghiệm,
$$ \text{Trung bình} – \text{mode} = 3(\text{Trung bình} – \text{trung vị}). \quad (1.8) $$

**Trung bình nhân**

Trung bình nhân là một giá trị trung bình hoặc trung bình sử dụng tích của các giá trị của một tập hợp hữu hạn các số thực để chỉ ra một xu hướng trung tâm (trái ngược với trung bình cộng, sử dụng tổng của các giá trị).

**Định nghĩa (Trung bình nhân G):** Trung bình nhân G của một tập hợp N số dương $v_1, v_2, ..., v_N$ là căn bậc N của tích các số đó.
$$ G = \sqrt[N]{v_1v_2v_3...v_N} \quad (1.9) $$

---

**Trang 5**

**Trung bình điều hòa**

**Định nghĩa (Trung bình điều hòa H):** Trung bình điều hòa H của một tập hợp N số $v_1, v_2, ..., v_N$ là nghịch đảo của trung bình cộng các nghịch đảo của các số đó:
$$ H = \frac{1}{\frac{1}{N}\sum_{j=1}^{N} \frac{1}{v_j}} \quad (1.11) $$
Ví dụ, trung bình điều hòa của các số 2, 4, và 8 là $H = \frac{3}{\frac{1}{2} + \frac{1}{4} + \frac{1}{8}} = 3.43$.

**Trung bình bình phương**

**Định nghĩa (Trung bình bình phương (RMS) hoặc Trung bình toàn phương):** RMS được tính bằng cách lấy căn bậc hai của trung bình các bình phương của một tập hợp các giá trị. RMS của một tập hợp các số $v_1, v_2, ..., v_N$ được định nghĩa bởi:
$$ \text{RMS} = \sqrt{\bar{v^2}} = \sqrt{\frac{\sum_{j=1}^{N} v_j^2}{N}} \quad (1.12) $$
Ví dụ, RMS của tập hợp 1, 3, 4, 5, và 7 là $\text{RMS} = \sqrt{\frac{1^2+3^2+4^2+5^2+7^2}{5}} = 4.47$.

---

**Trang 6**

**Độ lệch chuẩn**

Trái ngược với khoảng biến thiên, độ lệch chuẩn xem xét tất cả các quan sát. Nói một cách tương đối, độ lệch chuẩn đo lường sự biến thiên bằng cách chỉ ra trung bình các quan sát cách xa trung bình bao nhiêu. Đối với một tập dữ liệu có sự biến thiên lớn, các quan sát, trung bình, sẽ cách xa trung bình; do đó độ lệch chuẩn sẽ lớn. Đối với một tập dữ liệu có sự biến thiên nhỏ, các quan sát, trung bình, sẽ gần với trung bình; do đó độ lệch chuẩn sẽ nhỏ.

**Định nghĩa (Độ lệch chuẩn của một Tổng thể):** Độ lệch chuẩn của một tập hợp N số $v_1, v_2, ..., v_N$ được ký hiệu là S và được định nghĩa bởi:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} (v_j - \bar{v})^2}{N}} \quad (1.16) $$
Do đó S đôi khi được gọi là độ lệch trung bình bình phương (xem Hình 1.10).
Đôi khi độ lệch chuẩn của dữ liệu mẫu được định nghĩa với $N – 1$ thay thế $N$ trong mẫu số của biểu thức (1.16) vì giá trị kết quả thể hiện một ước lượng tốt hơn về độ lệch chuẩn của một tổng thể mà từ đó mẫu được lấy. Đối với các giá trị lớn của N (chắc chắn là $N > 30$), thực tế không có sự khác biệt giữa hai định nghĩa.

**Định nghĩa (Độ lệch chuẩn cho Mẫu):** Độ lệch chuẩn của một tập hợp N số $v_1, v_2, ..., v_N$ được ký hiệu là S và được định nghĩa bởi:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} (v_j - \bar{v})^2}{N - 1}} \quad (1.17) $$
Do đó S đôi khi được gọi là độ lệch trung bình bình phương.

---

**Trang 7**

**Phương sai**

Phương sai là một thước đo độ phân tán của các điểm dữ liệu xung quanh giá trị trung bình. Phương sai là một công cụ hữu ích để hiểu và so sánh các tập dữ liệu. Ví dụ, nếu bạn có hai tập dữ liệu có cùng giá trị trung bình, nhưng phương sai khác nhau, bạn có thể nói rằng các điểm dữ liệu trong một tập dữ liệu phân tán rộng hơn các điểm dữ liệu trong tập dữ liệu kia.

**Định nghĩa (Phương sai):** Phương sai của một tập dữ liệu được định nghĩa là bình phương của độ lệch chuẩn và do đó được cho bởi $S^2$ trong (1.17).

Ví dụ, phương sai của tập dữ liệu 3, 4, 6, 7, 10 là 6 (trung bình là $(3 + 4 + 6 + 7 + 10)/5 = 6$ và $S^2 = ((-3)^2 + (-2)^2 + (0)^2 + (1)^2 + (4)^2)/5 = 6$).

Khi cần phân biệt độ lệch chuẩn của một tập dữ liệu mẫu của một tổng thể với độ lệch chuẩn được rút ra từ tổng thể này, chúng ta thường sử dụng ký hiệu $S$ cho loại sau và $\sigma$ cho loại trước. Do đó $S^2$ và $\sigma^2$ sẽ lần lượt biểu thị phương sai mẫu và phương sai tổng thể.

**Định lý 1.2:** Độ lệch chuẩn của một tập hợp N số $v_1, v_2, ..., v_N$ được định nghĩa bởi:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} v_j^2}{N} - \left(\frac{\sum_{j=1}^{N} v_j}{N}\right)^2} = \sqrt{\overline{v^2} - (\bar{v})^2} \quad (1.18) $$
trong đó $\overline{v^2}$ biểu thị trung bình của các giá trị bình phương của $v$, trong khi $(\bar{v})^2$ biểu thị bình phương của trung bình của các giá trị khác nhau của $v$.

---

**Trang 8**

Nếu một thí nghiệm được lặp lại $n$ lần và một sự kiện A được quan sát $f$ lần, trong đó $f$ là tần suất, thì theo khái niệm tần suất tương đối của xác suất:
$$ P(A) = \frac{f}{n} = \frac{\text{Tần suất của A}}{\text{Kích thước mẫu}} \quad (1.46) $$

**Các tiên đề của Xác suất**

Các tiên đề là các nguyên tắc cơ bản mà lý thuyết xác suất được xây dựng dựa trên đó. Cách tiếp cận tiên đề xác định các thuộc tính mà xác suất phải thỏa mãn để được coi là các thước đo hợp lệ của sự không chắc chắn. Các tiên đề Kolmogorov được nhà toán học người Nga Andrey Kolmogorov giới thiệu vào năm 1933.

**Định nghĩa (Các tiên đề Kolmogorov, Các tiên đề của Xác suất):** Xác suất là một con số được gán cho mỗi thành viên của một tập hợp các sự kiện từ một thí nghiệm ngẫu nhiên thỏa mãn các thuộc tính sau:
(1) $P(S) = 1$ trong đó S là không gian mẫu
(2) $0 \leq P(E) \leq 1$ cho bất kỳ sự kiện E nào
(3) Đối với hai sự kiện $E_1$ và $E_2$ với $E_1 \cap E_2 = \emptyset$
$$ P(E_1 \cup E_2) = P(E_1) + P(E_2). \quad (1.47) $$

**Nhận xét:**
$$ P(\emptyset) = 0, \quad (1.48) $$
và đối với bất kỳ sự kiện E nào,
$$ P(E') = 1 - P(E). \quad (1.49) $$

---

**Trang 9**

**Ví dụ 1.7**
Một đồng xu được tung hai lần. Xác suất để có ít nhất 1 mặt ngửa là bao nhiêu?
**Giải pháp**
Không gian mẫu cho thí nghiệm này là
$ S = \{HH, HT, TH, TT\}. $
Nếu đồng xu là cân đối, mỗi kết quả này đều có khả năng xảy ra như nhau. Do đó, chúng ta gán một xác suất $\omega$ cho mỗi điểm mẫu. Khi đó $4\omega = 1$, hay $\omega = 1/4$. Nếu A biểu thị sự kiện có ít nhất 1 mặt ngửa xảy ra, thì
$A = \{HH, HT, TH\}$ và $P(A) = 1/4 + 1/4 + 1/4 = 3/4$.
Do đó, nếu một thí nghiệm có thể dẫn đến bất kỳ một trong N kết quả khác nhau có khả năng xảy ra như nhau, và nếu chính xác $n$ trong số các kết quả này tương ứng với sự kiện A, thì xác suất của sự kiện A là
$$ P(A) = \frac{n}{N} \quad (1.50) $$

**Hợp của các Sự kiện và Quy tắc Cộng**
Các sự kiện kết hợp được tạo ra bằng cách áp dụng các phép toán tập hợp cơ bản cho các sự kiện riêng lẻ. Hợp của các sự kiện, chẳng hạn như $A \cup B$; giao của các sự kiện, chẳng hạn như $A \cap B$; và phần bù của các sự kiện, chẳng hạn như $A^c$ là các mối quan tâm chung. Xác suất của một sự kiện kết hợp thường có thể được xác định từ xác suất của các sự kiện riêng lẻ tạo nên nó. Các phép toán tập hợp cơ bản cũng đôi khi hữu ích trong việc xác định xác suất của một sự kiện kết hợp.

**Định lý 1.5 (Xác suất của một Phép hợp):**
$$ P(A \cup B) = P(A) + P(B) – P(A \cap B) \quad (1.51) $$
Nếu A và B là các sự kiện xung khắc ($A \cap B = \emptyset$ và $P(A \cap B) = 0$), thì
$$ P(A \cup B) = P(A) + P(B). \quad (1.52) $$
Đối với ba sự kiện, chúng ta có
$$ P(A \cup B \cup C) = P(A) + P(B) + P(C) – P(A \cap B) – P(A \cap C) – P(B \cap C) + P(A \cap B \cap C). \quad (1.53) $$
Hơn nữa, một tập hợp các sự kiện, $E_1, E_2, ..., E_k$, được gọi là xung khắc lẫn nhau nếu tất cả các cặp,
$$ E_i \cap E_j = \emptyset. \quad (1.54) $$
Đối với một tập hợp các sự kiện xung khắc lẫn nhau,
$$ P(E_1 \cup E_2 \cup ... \cup E_k) = P(E_1) + P(E_2) + ... + P(E_k). \quad (1.55) $$

---

**Trang 10**

**1.8 Xác suất có điều kiện**

Một khái niệm rất quan trọng trong lý thuyết xác suất là xác suất có điều kiện. Trong một số ứng dụng, người thực hành quan tâm đến cấu trúc xác suất dưới những hạn chế nhất định. Xác suất của một sự kiện B với điều kiện sự kiện A đã xảy ra được ký hiệu là $P(B|A)$ và được gọi là xác suất có điều kiện của B khi biết A.

**Định nghĩa (Xác suất có điều kiện):** Xác suất có điều kiện của một sự kiện B khi biết một sự kiện A đã xảy ra, $P(A) > 0$, là
$$ P(B|A) = \frac{P(A \cap B)}{P(A)} \quad (1.56) $$
Định nghĩa này có thể được hiểu trong một trường hợp đặc biệt trong đó tất cả các kết quả của một thí nghiệm ngẫu nhiên đều có khả năng xảy ra như nhau. Nếu có N tổng số kết quả,
$$ P(A) = \frac{\text{số kết quả trong A}}{N}. \quad (1.57) $$
Ngoài ra,
$$ P(A \cap B) = \frac{\text{số kết quả trong A} \cap B}{N}. \quad (1.58) $$
Do đó,
$$ \frac{P(A \cap B)}{P(A)} = \frac{\text{số kết quả trong A} \cap B}{\text{số kết quả trong A}} \quad (1.59) $$
Do đó, $P(B|A)$ có thể được hiểu là tần suất tương đối của sự kiện B trong số các thử nghiệm tạo ra một kết quả trong sự kiện A.

**Định nghĩa (Quy tắc Nhân):**
$$ P(A \cap B) = P(B|A)P(A) = P(A|B)P(B). \quad (1.60) $$

---

**Trang 11**

**Định nghĩa (Quy tắc Nhân):**
$$ P(A \cap B) = P(B|A)P(A) = P(A|B)P(B). \quad (1.60) $$
Do đó, xác suất để cả A và B xảy ra bằng xác suất để A xảy ra nhân với xác suất có điều kiện để B xảy ra, khi biết A xảy ra.

Đối với bất kỳ sự kiện B nào, chúng ta có thể viết B là hợp của phần của B trong A và phần của B trong A'. Nghĩa là,
$$ B = (A \cap B) \cup (A' \cap B). \quad (1.61) $$
Kết quả này được hiển thị trong biểu đồ Venn ở Hình 1.12. Vì A và A' là xung khắc, nên $A \cap B$ và $A' \cap B$ là xung khắc.
Do đó, quy tắc xác suất toàn phần sau đây được thu được.

**Định nghĩa (Quy tắc Xác suất Toàn phần):** Đối với bất kỳ sự kiện A và B nào,
$$ P(B) = P(B \cap A) + P(B \cap A') $$
$$ = P(B|A)P(A) + P(B|A')P(A'). \quad (1.62) $$
Hơn nữa, giả sử $E_1, E_2, ..., E_k$ là các tập hợp xung khắc và vét cạn lẫn nhau. Khi đó
$$ P(B) = P(B \cap E_1) + P(B \cap E_2) + ... + P(B \cap E_k) $$
$$ = P(B|E_1)P(E_1) + P(B|E_2)P(E_2) + ... + P(B|E_k)P(E_k). \quad (1.63) $$

---

**Trang 12**

**Độc lập**

Hai sự kiện được cho là độc lập nếu sự xảy ra (hoặc không xảy ra) của một sự kiện không ảnh hưởng đến xác suất xảy ra của sự kiện kia. Trong trường hợp này, xác suất có điều kiện $P(B|A)$ có thể bằng $P(B)$, nghĩa là, kiến thức về việc kết quả của thí nghiệm nằm trong sự kiện A không ảnh hưởng đến xác suất kết quả nằm trong sự kiện B. Vì vậy, chúng ta có
$$ P(A \cap B) = P(B|A)P(A) = P(B)P(A), \quad (1.64) $$
và
$$ P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)P(B)}{P(B)} = P(A). \quad (1.65) $$
Những kết luận này dẫn đến một định nghĩa quan trọng.

**Định nghĩa (Độc lập, Hai Sự kiện):** Hai sự kiện là độc lập nếu bất kỳ một trong các mệnh đề tương đương sau đây là đúng:
(1) $P(A|B) = P(A)$,
(2) $P(B|A) = P(B)$,
(3) $P(A \cap B) = P(A)P(B)$.

Dễ dàng chỉ ra rằng tính độc lập ngụ ý các kết quả liên quan như
$$ P(A' \cap B') = P(A')P(B'). \quad (1.66) $$

---

**Trang 13**

**Một số loại Ma trận**

**Định nghĩa (Ma trận Đơn vị):** Ma trận đơn vị kích thước n là một ma trận vuông $n \times n$ với các số một trên đường chéo chính và các số không ở những nơi khác.
$$ I =
  \begin{pmatrix}
  1 & 0 & \cdots & 0 \\
  0 & 1 & \cdots & 0 \\
  \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & 1
  \end{pmatrix} \quad (2.19) $$

**Định nghĩa (Ma trận Thực):** Liên hợp phức của một ma trận M được viết là $M^*$ và các phần tử của $M^*$ là liên hợp phức của các phần tử của M, tức là
$$ (M^*)_{ij} = (M_{ij})^*. \quad (2.20) $$
Đối với một ma trận thực, tất cả các phần tử là thực và, do đó
$$ M = M^*, \quad (M)_{ij} = M_{ij}. \quad (2.21) $$

**Định nghĩa (Ma trận Đối xứng):** Chuyển vị của một ma trận M, ký hiệu là $M^T$, thu được bằng cách đổi hàng thành cột (hoặc ngược lại). Đối với một ma trận đối xứng
$$ M^T = M, \quad M_{ij} = M_{ji}. \quad (2.22) $$

**Định nghĩa (Ma trận Phản đối xứng):** Ma trận phản đối xứng thỏa mãn
$$ M^T = -M, \quad M_{ij} = -M_{ji}. \quad (2.23) $$

**Định nghĩa (Ma trận Trực giao):** Một ma trận trực giao thỏa mãn
$$ MM^T = M^TM = I. \quad (2.24) $$
Điều này dẫn đến đặc trưng tương đương: một ma trận M là trực giao nếu chuyển vị của nó bằng nghịch đảo của nó:
$$ M^T = M^{-1}. \quad (2.25) $$

---

**Trang 14**

**Định nghĩa (Chuyển vị Liên hợp hay Chuyển vị Hermite):** Chuyển vị Hermite của một ma trận phức M kích thước $m \times n$ là một ma trận $m \times m$ (Lưu ý: OCR có lỗi, phải là $n \times m$) thu được bằng cách chuyển vị M và áp dụng liên hợp phức cho mỗi mục nhập.
$$ M^H = (M^T)^*. \quad (2.26) $$
Đối với ma trận thực, chuyển vị liên hợp chính là chuyển vị, $M^H = M^T$.

**Định nghĩa (Ma trận Unita):** Một ma trận vuông phức M là unita nếu chuyển vị liên hợp $M^\dagger$ của nó cũng là nghịch đảo của nó, nghĩa là, nếu
$$ M^\dagger M = MM^\dagger = MM^{-1} = I. \quad (2.27) $$
(Lưu ý: $M^\dagger$ thường được dùng cho chuyển vị Hermite, giống $M^H$)

**Định nghĩa (Ma trận Tam giác Dưới và Tam giác Trên):** Một ma trận có dạng
$$ \begin{pmatrix}
  l_{11} & 0 & \cdots & 0 \\
  l_{21} & l_{22} & \cdots & 0 \\
  \vdots & \vdots & \ddots & \vdots \\
  l_{n1} & l_{n2} & \cdots & l_{nn}
  \end{pmatrix} \quad (2.28) $$
được gọi là ma trận tam giác dưới hoặc ma trận tam giác trái, và tương tự một ma trận có dạng
$$ \begin{pmatrix}
  u_{11} & u_{12} & \cdots & u_{1n} \\
  0 & u_{22} & \cdots & u_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & u_{nn}
  \end{pmatrix} \quad (2.29) $$
được gọi là ma trận tam giác trên hoặc ma trận tam giác phải. Trong ma trận tam giác dưới, tất cả các phần tử phía trên đường chéo chính là số không, trong ma trận tam giác trên, tất cả các phần tử phía dưới đường chéo chính là số không.

---

**Trang 15**

Các thực thể mà Dirac gọi là "ket" và "bra" lần lượt là các vector cột và vector hàng. Trong ký hiệu Dirac, "braket", $\langle \cdot | \cdot \rangle$, đề cập đến sự kết hợp của các phần tử "bra" và "ket". Tất nhiên, các phần tử của các vector này nói chung là các số phức. Trong cuốn sách này, để thuận tiện, chúng ta sẽ diễn đạt bằng các vector và ma trận của các số thực. Do đó, trong ngôn ngữ ma trận, hai vector này liên quan với nhau đơn giản bằng cách lấy chuyển vị. Tóm lại, Dirac đề cập đến một "bra," mà ông ký hiệu là $\langle a|$, một "ket," mà ông ký hiệu là $|b\rangle$, và một ma trận vuông M, chúng ta có thể liên kết các vector và ma trận này (trong không gian 3 chiều) như sau;
$$ \langle a| = a^T = (a_1, a_2, a_3), \quad |b\rangle = b =
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
, \quad M =
  \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} \quad (2.30) $$
Tích của một bra và một ket, ký hiệu là $\langle a||b\rangle$ hoặc, phổ biến hơn, bằng cách bỏ một trong các đường thẳng đứng, như $\langle a|b\rangle$, đơn giản là một số được cho bởi tích vô hướng của một vector hàng và một vector cột theo cách thông thường, tức là,

---

**Trang 16**

$$ \langle a|b\rangle = a^T b = (a_1, a_2, a_3)
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
= a_1b_1 + a_2b_2 + a_3b_3 = \sum_{i=1}^{3} a_ib_i. \quad (2.31) $$

Chúng ta cũng có thể hình thành tích của một ket nhân với một bra, cho ra một ma trận vuông, như được hiển thị dưới đây,
$$ |b\rangle\langle a| = ba^T =
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
(a_1, a_2, a_3) =
  \begin{pmatrix} b_1a_1 & b_1a_2 & b_1a_3 \\ b_2a_1 & b_2a_2 & b_2a_3 \\ b_3a_1 & b_3a_2 & b_3a_3 \end{pmatrix} \quad (2.32) $$
Tích của một ma trận vuông nhân với một ket tương ứng với tích của một ma trận vuông nhân với một vector cột, cho ra một vector cột khác (nghĩa là, một ket). Về mặt toán học, nếu chúng ta có một ma trận vuông M kích thước $n \times n$ và một vector ket $|b\rangle$ kích thước $n \times 1$, tích của chúng $M|b\rangle = Mb$ cho kết quả là một vector cột (ket) kích thước $n \times 1$. Phép nhân được thực hiện bằng cách lấy tích vô hướng của mỗi hàng của ma trận M với vector cột $|b\rangle$ (nghĩa là, sử dụng phép nhân hàng-cột hoặc tích vô hướng của các hàng với cột). Mỗi phần tử của vector kết quả thu được bằng cách nhân các phần tử tương ứng của hàng và vector cột rồi cộng các tích lại.

Trong ký hiệu tổng quát, chúng ta có
$$ M|b\rangle = Mb =
  \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix}
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
=
  \begin{pmatrix} M_{11}b_1 + M_{12}b_2 + M_{13}b_3 \\ M_{21}b_1 + M_{22}b_2 + M_{23}b_3 \\ M_{31}b_1 + M_{32}b_2 + M_{33}b_3 \end{pmatrix}
=
  \begin{pmatrix} \sum_{i=1}^{3} M_{1i}b_i \\ \sum_{i=1}^{3} M_{2i}b_i \\ \sum_{i=1}^{3} M_{3i}b_i \end{pmatrix} \quad (2.33.1) $$

Trong ký hiệu ma trận Dirac (2.33.1) trở thành,
$$ M|b\rangle = Mb =
  \begin{pmatrix} \langle m^{(1)}|b\rangle \\ \langle m^{(2)}|b\rangle \\ \langle m^{(3)}|b\rangle \end{pmatrix} \quad (2.33.2) $$

---

**Trang 17**

trong đó,
$$ \langle m^{(1)}| = (M_{11} \ M_{12} \ M_{13}), \quad \langle m^{(2)}| = (M_{21} \ M_{22} \ M_{23}), \quad \langle m^{(3)}| = (M_{31} \ M_{32} \ M_{33}), \quad (2.34) $$
$$ |b^{(1)}\rangle =
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} \quad (2.35) $$
(Lưu ý: OCR ở (2.35) có thể nhầm lẫn, $|b^{(1)}\rangle$ nên là $|b\rangle$ hoặc $b$ nếu theo ngữ cảnh của (2.33.2))

Tuy nhiên, chúng ta cũng có phép nhân cột-hàng (tức là, một tổ hợp tuyến tính của các cột sử dụng $b_i$). Trong ký hiệu tổng quát, chúng ta có
$$ M|b\rangle = Mb =
  \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix}
  \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
=
  \begin{pmatrix} M_{11} \\ M_{21} \\ M_{31} \end{pmatrix} b_1 +
  \begin{pmatrix} M_{12} \\ M_{22} \\ M_{32} \end{pmatrix} b_2 +
  \begin{pmatrix} M_{13} \\ M_{23} \\ M_{33} \end{pmatrix} b_3 $$
$$ =
  \begin{pmatrix} M_{11}b_1 + M_{12}b_2 + M_{13}b_3 \\ M_{21}b_1 + M_{22}b_2 + M_{23}b_3 \\ M_{31}b_1 + M_{32}b_2 + M_{33}b_3 \end{pmatrix}
=
  \begin{pmatrix} \sum_{i=1}^{3} M_{1i}b_i \\ \sum_{i=1}^{3} M_{2i}b_i \\ \sum_{i=1}^{3} M_{3i}b_i \end{pmatrix} \quad (2.36.1) $$

Trong ký hiệu ma trận Dirac (2.36.1) trở thành,

---

**Trang 18**

$$ M|b\rangle = Mb = |m^{(1)}\rangle\langle b^{(1)}| + |m^{(2)}\rangle\langle b^{(2)}| + |m^{(3)}\rangle\langle b^{(3)}| $$
$$ = \sum_{i=1}^{3} |m^{(i)}\rangle\langle b^{(i)}| \quad (2.36.2) $$
trong đó,
$$ |m^{(1)}\rangle =
  \begin{pmatrix} M_{11} \\ M_{21} \\ M_{31} \end{pmatrix}
, \quad |m^{(2)}\rangle =
  \begin{pmatrix} M_{12} \\ M_{22} \\ M_{32} \end{pmatrix}
, \quad |m^{(3)}\rangle =
  \begin{pmatrix} M_{13} \\ M_{23} \\ M_{33} \end{pmatrix} \quad (2.37) $$
$$ \langle b^{(1)}| = (b_1), \quad \langle b^{(2)}| = (b_2), \quad \langle b^{(3)}| = (b_3). \quad (2.38) $$
Do đó, $M|b\rangle$ là một tổ hợp tuyến tính của các cột của M. Điều này là cơ bản. Tư duy này dẫn chúng ta đến không gian cột của ma trận M và ý tưởng về hạng của ma trận. Ý tưởng chính là lấy tất cả các tổ hợp của các cột. Tất cả các số thực $b_i$ đều được phép - không gian bao gồm $M|b\rangle$ cho tất cả các vector $|b\rangle$. Bằng cách này, chúng ta nhận được vô số vector đầu ra $M|b\rangle$.

Tích của một bra nhân với một ma trận vuông tương ứng với tích của một vector hàng nhân với một ma trận vuông, kết quả lại là một vector hàng (tức là, một "bra"), được viết là
$$ \langle a|M = a^T M = (a_1, a_2, a_3)
  \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} $$
$$ = \left(\sum_{i=1}^{3} a_iM_{i1}, \sum_{i=1}^{3} a_iM_{i2}, \sum_{i=1}^{3} a_iM_{i3}\right) \quad (2.39) $$
hoặc

---

**Trang 19**

$$ \langle a|M = a^T M = (a_1, a_2, a_3)
  \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} $$
$$ = a_1(M_{11} \ M_{12} \ M_{13}) + a_2(M_{21} \ M_{22} \ M_{23}) + a_3(M_{31} \ M_{32} \ M_{33}) $$
$$ = (a_1M_{11}+a_2M_{21}+a_3M_{31}, \quad a_1M_{12}+a_2M_{22}+a_3M_{32}, \quad a_1M_{13}+a_2M_{23}+a_3M_{33}) $$
$$ = \sum_{i=1}^{3} \langle a^{(i)}|\langle m^{(i)}|, \quad (2.40) $$
(Lưu ý: Công thức cuối của (2.40) có vẻ không chính xác, có thể phải là $\sum a_i \langle m^{(i)}|$ với $\langle m^{(i)}|$ là hàng thứ i của M)
trong đó
$$ |a^{(1)}\rangle = (a_1), \quad |a^{(2)}\rangle = (a_2), \quad |a^{(3)}\rangle = (a_3). \quad (2.41) $$
(Lưu ý: Ký hiệu $|a^{(i)}\rangle$ cho các thành phần vô hướng $a_i$ là không chuẩn, thường chỉ viết $a_i$).
Do đó, $\langle a|M$ là một tổ hợp tuyến tính của các hàng của M. Tư duy này dẫn chúng ta đến không gian hàng của ma trận M và định nghĩa thứ hai về hạng của một ma trận. Ý tưởng chính là lấy tất cả các tổ hợp của các hàng. Tất cả các số thực $a_i$ đều được phép - không gian bao gồm $\langle a|M$ cho tất cả các vector $\langle a|$. Bằng cách này, chúng ta nhận được vô số vector đầu ra $\langle a|M$.

---

**Trang 20**

**MẠNG NƠ-RON TRUYỀN THẲNG ĐA LỚP**
(Nội dung văn bản giống như đã dịch ở lần trước)

---

**Trang 21**

[Sơ đồ cấu trúc một nơ-ron]
$w = |w\rangle = (w_1; w_2; ...; w_n)$
$x = |x\rangle = (x_1; x_2; ...; x_n)$

Đầu vào -> [$\Sigma$ (Tổng hợp), $\sigma$ (Kích hoạt)] -> Đầu ra (Nơ-ron)
($x_1, ..., x_{n-1}, x_n$ với các trọng số $w_1, ..., w_{n-1}, w_n$ và thiên vị $b$)
$a = \sigma(w^T x + b)$

Chia nhỏ:
Đầu vào -> [$\Sigma$] -> $z = w^T x + b$ (Giá trị tiền kích hoạt) -> [$\sigma$] -> $a = \sigma(z)$ (Giá trị hậu kích hoạt)

Hình 3.1. Giá trị tiền kích hoạt và hậu kích hoạt trong một nơ-ron.

**Tính toán của Đơn vị/Nút/Nơ-ron**
(Nội dung văn bản giống như đã dịch ở lần trước)

---

**Trang 22**

Một nơ-ron đơn lẻ có một vector đầu vào n chiều và có một tín hiệu đầu ra đơn. Về mặt toán học, một nơ-ron là một hàm nhận đầu vào là một vector $\mathbf{x} \in \mathbb{R}^n$, $\mathbf{x} = |\mathbf{x}\rangle = (x_1, x_2, ..., x_n)^T$ và tạo ra một đại lượng vô hướng. Một đơn vị được tham số hóa bởi một vector trọng số $\mathbf{w} \in \mathbb{R}^n$, $\mathbf{w} = |\mathbf{w}\rangle = (w_1, w_2, ..., w_n)^T$, trong đó $w_i$ là trọng số liên kết với đầu vào $x_i$, và một thuật ngữ thiên vị ký hiệu là $b$, xem Hình 3.1. Các nơ-ron áp dụng một AF, $\sigma$, cho tổng có trọng số của các đầu vào của chúng. Các hoạt động cơ bản của một nơ-ron có thể được biểu diễn toán học như sau:
$$ z = \sum_{i=1}^{n} w_ix_i + b = \mathbf{w}^T\mathbf{x} + b = (\mathbf{w}|\mathbf{x}) + b, \quad (3.1.1) $$
$$ a = \sigma(z). \quad (3.1.2) $$
Sự phân tách các tính toán của nơ-ron thành hai giá trị riêng biệt được hiển thị trong Hình 3.1. Một nơ-ron thực sự tính toán hai hàm trong nơ-ron, đó là lý do tại sao chúng ta đã kết hợp ký hiệu tổng hợp $\Sigma$ cũng như ký hiệu kích hoạt $\sigma$ trong một nơ-ron.

*   Trước khi áp dụng AF, $\sigma$, nút tính toán một giá trị được gọi là giá trị tiền kích hoạt ($z$). Giá trị này được tính bằng tổng có trọng số của các đầu vào ($x_i$) cộng với thiên vị ($b$), (3.1.1).
*   Giá trị tiền kích hoạt sau đó được truyền qua một AF $\sigma$, ký hiệu là $\sigma(z)$. Các AF phổ biến bao gồm Sigmoid ($\sigma(z) = 1/(1 + e^{-z})$), và hyperbolic tangent ($\tanh(z)$). Kết quả áp dụng AF là giá trị hậu kích hoạt $a$. Đây là đầu ra cuối cùng của nút. AF cho phép NNs mô hình hóa các mối quan hệ phức tạp trong dữ liệu mà có thể không nắm bắt được bằng một phép biến đổi tuyến tính đơn giản.

---

**Trang 23**

[Sơ đồ Mạng Nơ-ron Truyền thẳng (FFNN)]
Hình 3.2. FFNN có một lớp đầu vào (4 nơ-ron), chỉ một lớp ẩn (3 nơ-ron) và một lớp đầu ra (1 nơ-ron).
(Sơ đồ cho thấy các nơ-ron đầu vào $a^{(0)}_1$ đến $a^{(0)}_4$, kết nối với các nơ-ron lớp ẩn $z^{(1)}_1 \rightarrow a^{(1)}_1$ đến $z^{(1)}_3 \rightarrow a^{(1)}_3$ thông qua các trọng số $w^{(1)}_{ij}$, và các nơ-ron lớp ẩn này kết nối với nơ-ron lớp đầu ra $z^{(2)} \rightarrow a^{(2)}$ thông qua các trọng số $w^{(2)}_{1j}$. Các nơ-ron thiên vị (+1) được kết nối với mỗi nơ-ron trong lớp ẩn và lớp đầu ra thông qua các trọng số thiên vị $b^{(1)}_j$ và $b^{(2)}_1$.)

Một điểm quan trọng xuất hiện từ Hình 3.1 là người ta có thể coi một nút có kích hoạt phi tuyến như hai nút tính toán riêng biệt, một nút cho phép biến đổi tuyến tính $z = \mathbf{w}^T\mathbf{x} + b$ và nút kia cho phép biến đổi phi tuyến $\sigma(z)$. Sự tách biệt khái niệm này có thể đơn giản hóa kết quả phân tích và giúp dễ hiểu và phân tích hành vi của NNs trong các tình huống nhất định.

---

**Trang 24 - Trang 27**
(Nội dung văn bản giống như đã dịch ở lần trước, các công thức hàm kích hoạt đã đúng định dạng)

**Hàm Sigmoid:**
$$ \sigma_{\text{Sigmoid}}(z) = \frac{1}{1 + e^{-z}} \quad (3.2) $$

**Hàm Hyperbolic Tangent (Tanh):**
$$ \sigma_{\text{Tanh}}(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}} \quad (3.3) $$

**Đơn vị Tuyến tính Chỉnh lưu (ReLU):**
$$ \sigma_{\text{ReLU}}(z) = \max(z, 0) \quad (3.4) $$

**Đơn vị Tuyến tính Số mũ (ELU):**
$$ \sigma_{\text{ELU}}(z) =
  \begin{cases}
  z, & \text{if } z > 0 \\
  \alpha(e^z - 1), & \text{if } z \leq 0
  \end{cases} \quad (3.5) $$

---

**Trang 28**

**Hàm Softmax:**
$$ \sigma_{\text{Softmax}}(z_i) = a_i = \frac{e^{z_i}}{\sum_{j=1}^{n} e^{z_j}} \quad \text{cho } i = 1,2,...,n. \quad (3.6) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 29 - Trang 30**
(Nội dung văn bản giống như đã dịch ở lần trước)

---

**Trang 31**
(Nội dung văn bản giống như đã dịch ở lần trước, các công thức đã đúng định dạng)
$$ \mathbf{a} = \sigma(\mathbf{z}), \quad (3.7) $$

---

**Trang 32**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{a} = |\mathbf{a}\rangle = \sigma(\mathbf{z}) = (\sigma(z_1), \sigma(z_2), ..., \sigma(z_n))^T. \quad (3.8) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 33**
(Sơ đồ FFNN với ký hiệu vector)
Hình 3.5. Ký hiệu vector và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.)
Các phương trình dưới sơ đồ:
$$ \mathbf{W}^{(1)}_{(3 \times 4)} \mathbf{a}^{(0)}_{(4 \times 1)} + \mathbf{w}_{0}^{(1)}_{(3 \times 1)} = \mathbf{z}^{(1)}_{(3 \times 1)} $$
$$ \mathbf{W}^{(2)}_{(3 \times 3)} \mathbf{a}^{(1)}_{(3 \times 1)} + \mathbf{w}_{0}^{(2)}_{(3 \times 1)} = \mathbf{z}^{(2)}_{(3 \times 1)} $$
$$ \mathbf{W}^{(3)}_{(3 \times 3)} \mathbf{a}^{(2)}_{(3 \times 1)} + \mathbf{w}_{0}^{(3)}_{(3 \times 1)} = \mathbf{z}^{(3)}_{(3 \times 1)} $$
$$ \mathbf{W}^{(4)}_{(1 \times 3)} \mathbf{a}^{(3)}_{(3 \times 1)} + \mathbf{w}_{0}^{(4)}_{(1 \times 1)} = \mathbf{z}^{(4)}_{(1 \times 1)} $$

---

**Trang 34**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{a}^{(0)} = |\mathbf{a}^{(0)}\rangle =
  \begin{pmatrix} a_1^{(0)} \\ a_2^{(0)} \\ \vdots \\ a_{n_0}^{(0)} \end{pmatrix} \quad (3.9) $$
$$ \mathbf{z}^{(l)} = \mathbf{W}^{(l)}\mathbf{a}^{(l-1)} + \mathbf{b}^{(l)}, \quad \text{hoặc} \quad |\mathbf{z}^{(l)}\rangle = \mathbf{W}^{(l)}|\mathbf{a}^{(l-1)}\rangle + |\mathbf{b}^{(l)}\rangle, \quad (3.10) $$
$$ \mathbf{a}^{(l)} = \sigma^{(l)}(\mathbf{z}^{(l)}), \quad \text{hoặc} \quad |\mathbf{a}^{(l)}\rangle = \sigma^{(l)}(|\mathbf{z}^{(l)}\rangle). \quad (3.11) $$
trong đó: $\mathbf{W}^{(l)}$ là ma trận trọng số cho lớp $l$, $\mathbf{b}^{(l)}$ là vector thiên vị cho lớp $l$, và $\sigma^{(l)}$ là AF cho lớp $l$. Đầu ra của NN là kích hoạt của lớp cuối cùng: $\mathbf{a}^{(L)}$. Các phương trình ở trên hiện bao gồm rõ ràng thuật ngữ thiên vị $\mathbf{b}^{(l)}$ trong tính toán của tổng có trọng số $\mathbf{z}^{(l)}$. Đặt
$$ \mathbf{W}^{(l)} =
  \begin{pmatrix}
  w_{11}^{(l)} & w_{12}^{(l)} & \cdots & w_{1n_{l-1}}^{(l)} \\
  w_{21}^{(l)} & w_{22}^{(l)} & \cdots & w_{2n_{l-1}}^{(l)} \\
  \vdots & \vdots & \ddots & \vdots \\
  w_{n_l1}^{(l)} & w_{n_l2}^{(l)} & \cdots & w_{n_ln_{l-1}}^{(l)}
  \end{pmatrix}
, \quad \mathbf{a}^{(l)} = |\mathbf{a}^{(l)}\rangle =
  \begin{pmatrix} a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix}
, \quad \text{và} \quad \mathbf{b}^{(l)} = |\mathbf{b}^{(l)}\rangle =
  \begin{pmatrix} b_1^{(l)} \\ b_2^{(l)} \\ \vdots \\ b_{n_l}^{(l)} \end{pmatrix} \quad (3.12) $$

---

**Trang 35**
(Công thức lặp lại từ trang 34)
$$ \mathbf{z}^{(l)} = \mathbf{W}^{(l)}\mathbf{a}^{(l-1)} + \mathbf{b}^{(l)} $$
$$ = \mathbf{W}^{(l)}|\mathbf{a}^{(l-1)}\rangle + |\mathbf{b}^{(l)}\rangle $$
$$ =
  \begin{pmatrix}
  w_{11}^{(l)} & \cdots & w_{1n_{l-1}}^{(l)} \\
  w_{21}^{(l)} & \cdots & w_{2n_{l-1}}^{(l)} \\
  \vdots & \ddots & \vdots \\
  w_{n_l1}^{(l)} & \cdots & w_{n_ln_{l-1}}^{(l)}
  \end{pmatrix}
  \begin{pmatrix} a_1^{(l-1)} \\ a_2^{(l-1)} \\ \vdots \\ a_{n_{l-1}}^{(l-1)} \end{pmatrix}
+
  \begin{pmatrix} b_1^{(l)} \\ b_2^{(l)} \\ \vdots \\ b_{n_l}^{(l)} \end{pmatrix} $$
$$ =
  \begin{pmatrix}
  w_{11}^{(l)}a_1^{(l-1)} + \cdots + w_{1n_{l-1}}^{(l)}a_{n_{l-1}}^{(l-1)} + b_1^{(l)} \\
  w_{21}^{(l)}a_1^{(l-1)} + \cdots + w_{2n_{l-1}}^{(l)}a_{n_{l-1}}^{(l-1)} + b_2^{(l)} \\
  \vdots \\
  w_{n_l1}^{(l)}a_1^{(l-1)} + \cdots + w_{n_ln_{l-1}}^{(l)}a_{n_{l-1}}^{(l-1)} + b_{n_l}^{(l)}
  \end{pmatrix} \quad (3.13.1) $$

---

**Trang 36**
$$ \mathbf{z}^{(l)} =
  \begin{pmatrix}
  \sum_{j=1}^{n_{l-1}} w_{1j}^{(l)}a_j^{(l-1)} + b_1^{(l)} \\
  \sum_{j=1}^{n_{l-1}} w_{2j}^{(l)}a_j^{(l-1)} + b_2^{(l)} \\
  \vdots \\
  \sum_{j=1}^{n_{l-1}} w_{n_lj}^{(l)}a_j^{(l-1)} + b_{n_l}^{(l)}
  \end{pmatrix}
=
  \begin{pmatrix} z_1^{(l)} \\ z_2^{(l)} \\ \vdots \\ z_{n_l}^{(l)} \end{pmatrix} \quad (3.13.2) $$
trong đó
$$ z_i^{(l)} = \sum_{j=1}^{n_{l-1}} w_{ij}^{(l)}a_j^{(l-1)} + b_i^{(l)}, \quad (3.13.3) $$
và
$$ \mathbf{a}^{(l)} = |\mathbf{a}^{(l)}\rangle = \sigma^{(l)}(|\mathbf{z}^{(l)}\rangle) = \sigma^{(l)}
  \begin{pmatrix} z_1^{(l)} \\ z_2^{(l)} \\ \vdots \\ z_{n_l}^{(l)} \end{pmatrix}
=
  \begin{pmatrix} \sigma^{(l)}(z_1^{(l)}) \\ \sigma^{(l)}(z_2^{(l)}) \\ \vdots \\ \sigma^{(l)}(z_{n_l}^{(l)}) \end{pmatrix}
=
  \begin{pmatrix} a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix} \quad (3.13.4) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 37**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{b}^{(l)} = \mathbf{w}_0^{(l)} =
  \begin{pmatrix} w_{10}^{(l)} \\ w_{20}^{(l)} \\ \vdots \\ w_{n_l0}^{(l)} \end{pmatrix} \quad (3.14) $$
và
$$ \mathbf{z}^{(l)} = \mathbf{W}^{(l)}\mathbf{a}^{(l-1)} + \mathbf{b}^{(l)} $$
$$ = \mathbf{W}^{(l)}\mathbf{a}^{(l-1)} + \mathbf{w}_0^{(l)}. \quad (3.15) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 38**
(Trang này là bản sao của Trang 35)

---

**Trang 39**
Tính $\mathbf{z}^{(1)}$ và $\mathbf{a}^{(1)}$ như sau:
$$ \mathbf{z}^{(1)} = |\mathbf{z}^{(1)}\rangle =
  \begin{pmatrix} z_1^{(1)} \\ z_2^{(1)} \\ z_3^{(1)} \end{pmatrix}_{3 \times 1}
=
  \begin{pmatrix}
  w_{11}^{(1)} & w_{12}^{(1)} & w_{13}^{(1)} & w_{14}^{(1)} \\
  w_{21}^{(1)} & w_{22}^{(1)} & w_{23}^{(1)} & w_{24}^{(1)} \\
  w_{31}^{(1)} & w_{32}^{(1)} & w_{33}^{(1)} & w_{34}^{(1)}
  \end{pmatrix}_{3 \times 4}
  \begin{pmatrix} a_1^{(0)} \\ a_2^{(0)} \\ a_3^{(0)} \\ a_4^{(0)} \end{pmatrix}_{4 \times 1}
+
  \begin{pmatrix} w_{10}^{(1)} \\ w_{20}^{(1)} \\ w_{30}^{(1)} \end{pmatrix}_{3 \times 1} \quad (3.16.1) $$
$$ \mathbf{a}^{(1)} = |\mathbf{a}^{(1)}\rangle =
  \begin{pmatrix} a_1^{(1)} \\ a_2^{(1)} \\ a_3^{(1)} \end{pmatrix}_{3 \times 1}
= \sigma(\mathbf{z}^{(1)}) =
  \begin{pmatrix} \sigma(z_1^{(1)}) \\ \sigma(z_2^{(1)}) \\ \sigma(z_3^{(1)}) \end{pmatrix}_{3 \times 1} \quad (3.16.2) $$

Tính $\mathbf{z}^{(2)}$ và $\mathbf{a}^{(2)}$ như sau:
$$ \mathbf{z}^{(2)} = |\mathbf{z}^{(2)}\rangle =
  \begin{pmatrix} z_1^{(2)} \\ z_2^{(2)} \\ z_3^{(2)} \end{pmatrix}_{3 \times 1}
=
  \begin{pmatrix}
  w_{11}^{(2)} & w_{12}^{(2)} & w_{13}^{(2)} \\
  w_{21}^{(2)} & w_{22}^{(2)} & w_{23}^{(2)} \\
  w_{31}^{(2)} & w_{32}^{(2)} & w_{33}^{(2)}
  \end{pmatrix}_{3 \times 3}
  \begin{pmatrix} a_1^{(1)} \\ a_2^{(1)} \\ a_3^{(1)} \end{pmatrix}_{3 \times 1}
+
  \begin{pmatrix} w_{10}^{(2)} \\ w_{20}^{(2)} \\ w_{30}^{(2)} \end{pmatrix}_{3 \times 1} \quad (3.17.1) $$
$$ \mathbf{a}^{(2)} = |\mathbf{a}^{(2)}\rangle =
  \begin{pmatrix} a_1^{(2)} \\ a_2^{(2)} \\ a_3^{(2)} \end{pmatrix}_{3 \times 1}
= \sigma(\mathbf{z}^{(2)}) =
  \begin{pmatrix} \sigma(z_1^{(2)}) \\ \sigma(z_2^{(2)}) \\ \sigma(z_3^{(2)}) \end{pmatrix}_{3 \times 1} \quad (3.17.2) $$

Tính $\mathbf{z}^{(3)}$ và $\mathbf{a}^{(3)}$ như sau:
$$ \mathbf{z}^{(3)} = |\mathbf{z}^{(3)}\rangle =
  \begin{pmatrix} z_1^{(3)} \\ z_2^{(3)} \\ z_3^{(3)} \end{pmatrix}_{3 \times 1}
=
  \begin{pmatrix}
  w_{11}^{(3)} & w_{12}^{(3)} & w_{13}^{(3)} \\
  w_{21}^{(3)} & w_{22}^{(3)} & w_{23}^{(3)} \\
  w_{31}^{(3)} & w_{32}^{(3)} & w_{33}^{(3)}
  \end{pmatrix}_{3 \times 3}
  \begin{pmatrix} a_1^{(2)} \\ a_2^{(2)} \\ a_3^{(2)} \end{pmatrix}_{3 \times 1}
+
  \begin{pmatrix} w_{10}^{(3)} \\ w_{20}^{(3)} \\ w_{30}^{(3)} \end{pmatrix}_{3 \times 1} \quad (3.18.1) $$
$$ \mathbf{a}^{(3)} = |\mathbf{a}^{(3)}\rangle =
  \begin{pmatrix} a_1^{(3)} \\ a_2^{(3)} \\ a_3^{(3)} \end{pmatrix}_{3 \times 1}
= \sigma(\mathbf{z}^{(3)}) =
  \begin{pmatrix} \sigma(z_1^{(3)}) \\ \sigma(z_2^{(3)}) \\ \sigma(z_3^{(3)}) \end{pmatrix}_{3 \times 1} \quad (3.18.2) $$

---

**Trang 40**
Tính $\mathbf{z}^{(4)}$ và $\mathbf{a}^{(4)}$ như sau:
$$ \mathbf{z}^{(4)} = |z_1^{(4)}\rangle_{1 \times 1} =
  (w_{11}^{(4)} \ w_{12}^{(4)} \ w_{13}^{(4)})_{1 \times 3}
  \begin{pmatrix} a_1^{(3)} \\ a_2^{(3)} \\ a_3^{(3)} \end{pmatrix}_{3 \times 1}
+ w_{10}^{(4)}_{1 \times 1} \quad (3.19.1) $$
$$ \mathbf{a}^{(4)} = |a_1^{(4)}\rangle_{1 \times 1} = (a_1^{(4)})_{1 \times 1} = \sigma(z_1^{(4)})_{1 \times 1}. \quad (3.19.2) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)
$$ N: \mathbb{R}^{n_0} \rightarrow \mathbb{R}^{n_L}, \quad (3.20) $$

---

**Trang 41**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ N: \mathbb{R}^4 \rightarrow \mathbb{R}^1. \quad (3.21.1) $$
$$ N(\mathbf{a}^{(0)}) = \sigma^{(4)}\left( \mathbf{W}^{(4)} \sigma^{(3)}\left( \mathbf{W}^{(3)} \sigma^{(2)}\left( \mathbf{W}^{(2)} \sigma^{(1)}\left( \mathbf{W}^{(1)}\mathbf{a}^{(0)} + \mathbf{w}_0^{(1)} \right) + \mathbf{w}_0^{(2)} \right) + \mathbf{w}_0^{(3)} \right) + \mathbf{w}_0^{(4)} \right) \quad (3.21.2) $$
(Kích thước ma trận/vector dưới mỗi thành phần như đã mô tả trước)

---

**Trang 42**
**Lan truyền Tiến cho Tất cả các Ví dụ Huấn luyện**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ X = [\mathbf{x}^{(1)} \ \mathbf{x}^{(2)} \ \dots \ \mathbf{x}^{(m)}] \quad (3.22) $$
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{Z}^{(l)} = \mathbf{W}^{(l)}\mathbf{A}^{(l-1)} + \mathbf{W}_0^{(l)}, \quad (3.23) $$
$$ \mathbf{A}^{(l)} = \sigma(\mathbf{Z}^{(l)}), \quad (3.24) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 43**
**Lan truyền Tiến và Thuật ngữ Thiên vị (đối với AF $\sigma(1) \neq 1$)**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{W}}^{(l)} =
  \begin{pmatrix}
  w_{10}^{(l)} & w_{11}^{(l)} & w_{12}^{(l)} & \cdots & w_{1n_{l-1}}^{(l)} \\
  w_{20}^{(l)} & w_{21}^{(l)} & w_{22}^{(l)} & \cdots & w_{2n_{l-1}}^{(l)} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  w_{n_l0}^{(l)} & w_{n_l1}^{(l)} & w_{n_l2}^{(l)} & \cdots & w_{n_ln_{l-1}}^{(l)}
  \end{pmatrix} \quad (3.25) $$
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{a}}^{(l)} =
  \begin{pmatrix} 1 \\ a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix} \quad (3.26) $$

---

**Trang 44**
(Sơ đồ FFNN với ký hiệu vector tăng cường)
Hình 3.8. Ký hiệu vector và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ thiên vị trong trường hợp $\sigma(1) \neq 1$)
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{z}^{(l)} = \tilde{\mathbf{W}}^{(l)}\tilde{\mathbf{a}}^{(l-1)} \quad (3.27) $$
$$ \mathbf{a}^{(l)} = \sigma(\mathbf{z}^{(l)}). \quad (3.28) $$

---

**Trang 45**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{X}} =
  \begin{pmatrix}
  1 & 1 & \cdots & 1 \\
  \mathbf{x}^{(1)} & \mathbf{x}^{(2)} & \cdots & \mathbf{x}^{(m)}
  \end{pmatrix} \quad (3.29) $$
(Lưu ý: $\mathbf{x}^{(i)}$ là các vector cột, vì vậy ma trận này cần được hiểu rõ hơn về cấu trúc. Thông thường $\mathbf{X}$ có các mẫu theo hàng hoặc cột. Nếu $\mathbf{x}^{(i)}$ là cột, thì $\tilde{\mathbf{X}}$ sẽ có $n_0+1$ hàng và $m$ cột)
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{A}}^{(l)} =
  \begin{pmatrix}
  1 & 1 & \cdots & 1 \\
  \mathbf{a}_1^{(l)} & \mathbf{a}_2^{(l)} & \cdots & \mathbf{a}_m^{(l)}
  \end{pmatrix} \quad (3.30) $$
(Tương tự, $\mathbf{a}_i^{(l)}$ là vector kích hoạt cho mẫu $i$ tại lớp $l$)
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \mathbf{Z}^{(l)} = \tilde{\mathbf{W}}^{(l)}\tilde{\mathbf{A}}^{(l-1)}, \quad (3.31) $$
$$ \mathbf{A}^{(l)} = \sigma(\mathbf{Z}^{(l)}). \quad (3.32) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 46**
(Sơ đồ FFNN với ký hiệu vector tăng cường, trường hợp $\sigma(1)=1$)
Hình 3.9. Ký hiệu vector và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ thiên vị trong trường hợp $\sigma(1) = 1$)
$$ \tilde{\mathbf{W}}^{(l)} =
  \begin{pmatrix}
  w_{10}^{(l)} & w_{11}^{(l)} & w_{12}^{(l)} & \cdots & w_{1n_{l-1}}^{(l)} \\
  w_{20}^{(l)} & w_{21}^{(l)} & w_{22}^{(l)} & \cdots & w_{2n_{l-1}}^{(l)} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  w_{n_l0}^{(l)} & w_{n_l1}^{(l)} & w_{n_l2}^{(l)} & \cdots & w_{n_ln_{l-1}}^{(l)}
  \end{pmatrix}
= [\mathbf{w}_0^{(l)} | \mathbf{W}^{(l)}] \quad (3.33) $$

---

**Trang 47**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{a}}^{(l)} =
  \begin{pmatrix} 1 \\ a_1^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix}
=
  \begin{pmatrix} 1 \\ \mathbf{a}^{(l)} \end{pmatrix} \quad (3.34) $$
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{z}}^{(l)} = \tilde{\mathbf{W}}^{(l)}\tilde{\mathbf{a}}^{(l-1)}, \quad (3.35) $$
$$ \tilde{\mathbf{a}}^{(l)} = \sigma(\tilde{\mathbf{z}}^{(l)}), \quad (3.36) $$
và đầu ra cuối cùng của mạng được cho bởi
$$ \mathbf{z}^{(L)} = \tilde{\mathbf{W}}^{(L)}\tilde{\mathbf{a}}^{(L-1)}, \quad (3.37) $$
$$ \mathbf{a}^{(L)} = \sigma(\mathbf{z}^{(L)}), \quad (3.38) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 48**
$$ \tilde{\mathbf{A}}^{(l)} =
  \begin{pmatrix}
  1 & 1 & \cdots & 1 \\
  \mathbf{a}_1^{(l)} & \mathbf{a}_2^{(l)} & \cdots & \mathbf{a}_m^{(l)}
  \end{pmatrix} \quad (3.39) $$
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ \tilde{\mathbf{Z}}^{(l)} = \tilde{\mathbf{W}}^{(l)}\tilde{\mathbf{A}}^{(l-1)}, \quad \tilde{\mathbf{A}}^{(l)} = \sigma(\tilde{\mathbf{Z}}^{(l)}). \quad (3.40) $$
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ N: \mathbb{R}^4 \rightarrow \mathbb{R}^1, \quad (3.41.1) $$
$$ N(\tilde{\mathbf{a}}^{(0)}) = \sigma^{(4)}\left( \tilde{\mathbf{W}}^{(4)} \sigma^{(3)}\left( \tilde{\mathbf{W}}^{(3)} \sigma^{(2)}\left( \tilde{\mathbf{W}}^{(2)} \sigma^{(1)}\left( \tilde{\mathbf{W}}^{(1)}\tilde{\mathbf{a}}^{(0)} \right) \right) \right) \right) \quad (3.41.2) $$
(Kích thước ma trận/vector dưới mỗi thành phần như đã mô tả trước)

---

**Trang 49**
**3.3 Mạng Đa lớp như một Đồ thị Tính toán**
(Nội dung văn bản giống như đã dịch ở lần trước)
$$ N(\mathbf{a}^{(0)}) = \sigma^{(4)}\left( \mathbf{W}^{(4)} \cdot \left[\sigma^{(3)}\left( \mathbf{W}^{(3)} \cdot \left[\sigma^{(2)}\left( \mathbf{W}^{(2)} \cdot \left[\sigma^{(1)}\left( \mathbf{W}^{(1)} \cdot \mathbf{a}^{(0)} + \mathbf{w}_0^{(1)} \right)\right] + \mathbf{w}_0^{(2)} \right)\right] + \mathbf{w}_0^{(3)} \right)\right] + \mathbf{w}_0^{(4)} \right) $$
(Công thức ma trận chi tiết của (3.42.1) như đã trình bày trước)
$$ = \mathbf{a}^{(4)}, \quad (3.42.1) $$

---

**Trang 50**
(Nội dung văn bản giống như đã dịch ở lần trước)
(Công thức ma trận chi tiết của (3.42.2) như đã trình bày trước)
$$ =
  \begin{pmatrix}
  1 / (1 + e^{-(w^{(1)}_{11}a^{(0)}_1 + \dots + w^{(1)}_{14}a^{(0)}_4 + w^{(1)}_{10})}) \\
  1 / (1 + e^{-(w^{(1)}_{21}a^{(0)}_1 + \dots + w^{(1)}_{24}a^{(0)}_4 + w^{(1)}_{20})}) \\
  1 / (1 + e^{-(w^{(1)}_{31}a^{(0)}_1 + \dots + w^{(1)}_{34}a^{(0)}_4 + w^{(1)}_{30})})
  \end{pmatrix} \quad (3.42.2) $$
(Nội dung văn bản còn lại của trang này giống như đã dịch ở lần trước.)

---

**Trang 51**
(Nội dung văn bản giống như đã dịch ở lần trước)

---

Hy vọng với định dạng Markdown này, các công thức sẽ hiển thị tốt hơn cho bạn!