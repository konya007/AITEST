Tuyệt vời! Chúng ta sẽ tiếp tục với nội dung của "ARTIFICIAL INTELLIGENCE 2" của LÊ QUANG MINH.

---

**Page 1**

ARTIFICIAL INTELLIGENCE 2
LE QUANG MINH

**Tiếng Việt:**
TRÍ TUỆ NHÂN TẠO 2
LÊ QUANG MINH

---

**Page 2**

THE CONCEPT OF RATIONALITY
Fully observable vs. partially observable: If an agent's sensors give it access to the complete state of the environment at each point in time, then we say that the task environment is fully observable. A task environment is effectively fully observable if the sensors detect all aspects that are relevant to the choice of action; relevance, in turn, depends on the performance measure. Fully observable environments are convenient because the agent need not maintain any internal state to keep track of the world. An environment might be partially observable because of noisy and inaccurate sensors or because parts of the state are simply missing from the sensor data-for example, a vacuum agent with only a local dirt sensor cannot tell whether there is dirt in other squares, and an automated taxi cannot see what other drivers are thinking. If the agent has no sensors at all then the environment is unobservable. One might think that in such cases the agent's plight is hopeless, but, as we discuss in Chapter 4, the agent's goals may still be achievable, sometimes with certainty.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Quan sát được hoàn toàn (Fully observable) vs. quan sát được một phần (partially observable):** Nếu các cảm biến của một tác nhân cho phép nó truy cập vào trạng thái hoàn chỉnh của môi trường tại mỗi thời điểm, thì chúng ta nói rằng môi trường tác vụ đó là quan sát được hoàn toàn. Một môi trường tác vụ thực sự là quan sát được hoàn toàn nếu các cảm biến phát hiện tất cả các khía cạnh liên quan đến việc lựa chọn hành động; sự liên quan, đến lượt nó, phụ thuộc vào thước đo hiệu suất. Môi trường quan sát được hoàn toàn rất tiện lợi vì tác nhân không cần duy trì bất kỳ trạng thái nội tại nào để theo dõi thế giới. Một môi trường có thể là quan sát được một phần do các cảm biến nhiễu và không chính xác hoặc do các phần của trạng thái bị thiếu hoàn toàn khỏi dữ liệu cảm biến—ví dụ, một tác nhân hút bụi chỉ có cảm biến bụi cục bộ không thể biết liệu có bụi ở các ô khác hay không, và một chiếc taxi tự động không thể biết các tài xế khác đang nghĩ gì. Nếu tác nhân hoàn toàn không có cảm biến thì môi trường là không quan sát được (unobservable). Người ta có thể nghĩ rằng trong những trường hợp như vậy, tình thế của tác nhân là vô vọng, nhưng, như chúng ta sẽ thảo luận trong Chương 4, mục tiêu của tác nhân vẫn có thể đạt được, đôi khi với sự chắc chắn.

---

**Page 3**

THE CONCEPT OF RATIONALITY
Deterministic vs. stochastic. If the next state of the environment is completely determined by the current state and the action executed by the agent, then we say the environment is deterministic; otherwise, it is stochastic. In principle, an agent need not worry about uncertainty in a fully observable, deterministic environment. (In our definition, we ignore uncertainty that arises purely from the actions of other agents in a multiagent environment; thus, a game can be deterministic even though each agent may be unable to predict the actions of the others.) If the environment is partially observable, however, then it could appear to be stochastic. Most real situations are so complex that it is impossible to keep track of all the unobserved aspects; for practical purposes, they must be treated as stochastic. Taxi driving is clearly stochastic in this sense, because one can never predict the behavior of traffic exactly; moreover, one's tires blow out and one's engine seizes up without warning. The vacuum world as we described it is deterministic, but variations can include stochastic elements such as randomly appearing dirt and an unreliable suction mechanism (Exercise 2.13). We say an environment is uncertain if it is not fully observable or not deterministic. One final note: our use of the word “stochastic" generally implies that uncertainty about outcomes is quantified in terms of probabilities; a nondeterministic environment is one in which actions are characterized by their possible outcomes, but no probabilities are attached to them. Nondeterministic environment descriptions are usually associated with performance measures that require the agent to succeed for all possible outcomes of its actions.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Tất định (Deterministic) vs. ngẫu nhiên (stochastic):** Nếu trạng thái tiếp theo của môi trường được xác định hoàn toàn bởi trạng thái hiện tại và hành động được thực hiện bởi tác nhân, thì chúng ta nói môi trường đó là tất định; ngược lại, nó là ngẫu nhiên. Về nguyên tắc, một tác nhân không cần lo lắng về sự không chắc chắn trong một môi trường tất định, quan sát được hoàn toàn. (Trong định nghĩa của chúng ta, chúng ta bỏ qua sự không chắc chắn thuần túy phát sinh từ hành động của các tác nhân khác trong môi trường đa tác nhân; do đó, một trò chơi có thể là tất định mặc dù mỗi tác nhân có thể không dự đoán được hành động của những người khác.) Tuy nhiên, nếu môi trường chỉ quan sát được một phần, thì nó có thể có vẻ là ngẫu nhiên. Hầu hết các tình huống thực tế đều phức tạp đến mức không thể theo dõi tất cả các khía cạnh không quan sát được; vì mục đích thực tế, chúng phải được coi là ngẫu nhiên. Việc lái taxi rõ ràng là ngẫu nhiên theo nghĩa này, bởi vì người ta không bao giờ có thể dự đoán chính xác hành vi của giao thông; hơn nữa, lốp xe có thể bị nổ và động cơ có thể bị hỏng mà không có cảnh báo trước. Thế giới máy hút bụi như chúng ta mô tả là tất định, nhưng các biến thể có thể bao gồm các yếu tố ngẫu nhiên như bụi xuất hiện ngẫu nhiên và cơ chế hút không đáng tin cậy (Bài tập 2.13). Chúng ta nói một môi trường là không chắc chắn (uncertain) nếu nó không quan sát được hoàn toàn hoặc không tất định. Một lưu ý cuối cùng: việc chúng ta sử dụng từ "ngẫu nhiên" thường ngụ ý rằng sự không chắc chắn về kết quả được định lượng bằng xác suất; một môi trường không tất định (nondeterministic) là môi trường trong đó các hành động được đặc trưng bởi các kết quả có thể xảy ra của chúng, nhưng không có xác suất nào được gắn với chúng. Các mô tả môi trường không tất định thường được liên kết với các thước đo hiệu suất yêu cầu tác nhân phải thành công với tất cả các kết quả có thể có của hành động của nó.

---

**Page 4**

THE CONCEPT OF RATIONALITY
Episodic vs. sequential: In an episodic task environment, the agent's experience is divided into atomic episodes. In each episode the agent receives a percept and then performs a single action. Crucially, the next episode does not depend on the actions taken in previous episodes. Many classification tasks are episodic. For example, an agent that has to spot defective parts on an assembly line bases each decision on the current part, regardless of previous decisions; moreover, the current decision doesn't affect whether the next part is defective. In sequential environments, on the other hand, the current decision could affect all future decisions. Chess and taxi driving are sequential: in both cases, short-term actions can have long-term consequences. Episodic environments are much simpler than sequential environments because the agent does not need to think ahead.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Theo giai đoạn (Episodic) vs. tuần tự (sequential):** Trong một môi trường tác vụ theo giai đoạn, kinh nghiệm của tác nhân được chia thành các giai đoạn riêng lẻ (atomic episodes). Trong mỗi giai đoạn, tác nhân nhận một tri giác và sau đó thực hiện một hành động duy nhất. Điều quan trọng là giai đoạn tiếp theo không phụ thuộc vào các hành động đã được thực hiện trong các giai đoạn trước. Nhiều tác vụ phân loại là theo giai đoạn. Ví dụ, một tác nhân phải phát hiện các bộ phận bị lỗi trên một dây chuyền lắp ráp sẽ đưa ra mỗi quyết định dựa trên bộ phận hiện tại, bất kể các quyết định trước đó; hơn nữa, quyết định hiện tại không ảnh hưởng đến việc bộ phận tiếp theo có bị lỗi hay không. Mặt khác, trong các môi trường tuần tự, quyết định hiện tại có thể ảnh hưởng đến tất cả các quyết định trong tương lai. Cờ vua và lái xe taxi là tuần tự: trong cả hai trường hợp, các hành động ngắn hạn có thể có hậu quả dài hạn. Môi trường theo giai đoạn đơn giản hơn nhiều so với môi trường tuần tự vì tác nhân không cần phải suy nghĩ trước.

---

**Page 5**

THE CONCEPT OF RATIONALITY
Static vs. dynamic: If the environment can change while an agent is deliberating, then we say the environment is dynamic for that agent; otherwise, it is static. Static environments are easy to deal with because the agent need not keep looking at the world while it is deciding on an action, nor need it worry about the passage of time. Dynamic environments, on the other hand, are continuously asking the agent what it wants to do; if it hasn't decided yet, that counts as deciding to do nothing. If the environment itself does not change with the passage of time but the agent's performance score does, then we say the environment is semidynamic. Taxi driving is clearly dynamic: the other cars and the taxi itself keep moving while the driving algorithm dithers about what to do next. Chess, when played with a clock, is semidynamic. Crossword puzzles are static.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Tĩnh (Static) vs. động (dynamic):** Nếu môi trường có thể thay đổi trong khi một tác nhân đang suy xét, thì chúng ta nói môi trường đó là động đối với tác nhân đó; ngược lại, nó là tĩnh. Môi trường tĩnh dễ xử lý vì tác nhân không cần phải liên tục quan sát thế giới trong khi quyết định hành động, cũng không cần lo lắng về sự trôi qua của thời gian. Mặt khác, môi trường động liên tục yêu cầu tác nhân cho biết nó muốn làm gì; nếu nó chưa quyết định, điều đó được coi là quyết định không làm gì cả. Nếu bản thân môi trường không thay đổi theo thời gian nhưng điểm hiệu suất của tác nhân lại thay đổi, thì chúng ta nói môi trường đó là bán động (semidynamic). Lái xe taxi rõ ràng là động: các xe khác và chính chiếc taxi vẫn tiếp tục di chuyển trong khi thuật toán lái xe đang phân vân về việc phải làm gì tiếp theo. Cờ vua, khi chơi có đồng hồ bấm giờ, là bán động. Các câu đố ô chữ là tĩnh.

---

**Page 6**

THE CONCEPT OF RATIONALITY
Discrete vs. continuous: The discrete/continuous distinction applies to the state of the environment, to the way time is handled, and to the percepts and actions of the agent. For example, the chess environment has a finite number of distinct states (excluding the clock). Chess also has a discrete set of percepts and actions. Taxi driving is a continuous-state and continuous-time problem: the speed and location of the taxi and of the other vehicles sweep through a range of continuous values and do so smoothly over time. Taxi-driving actions are also continuous (steering angles, etc.). Input from digital cameras is discrete, strictly speaking, but is typically treated as representing continuously varying intensities and locations.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Rời rạc (Discrete) vs. liên tục (continuous):** Sự phân biệt rời rạc/liên tục áp dụng cho trạng thái của môi trường, cách xử lý thời gian, và các tri giác cũng như hành động của tác nhân. Ví dụ, môi trường cờ vua có một số lượng hữu hạn các trạng thái riêng biệt (không bao gồm đồng hồ). Cờ vua cũng có một tập hợp rời rạc các tri giác và hành động. Lái xe taxi là một vấn đề có trạng thái liên tục và thời gian liên tục: tốc độ và vị trí của taxi và của các phương tiện khác quét qua một loạt các giá trị liên tục và diễn ra một cách trơn tru theo thời gian. Các hành động lái xe taxi cũng liên tục (góc lái, v.v.). Đầu vào từ camera kỹ thuật số, nói một cách chính xác, là rời rạc, nhưng thường được coi là đại diện cho cường độ và vị trí thay đổi liên tục.

---

**Page 7**

THE CONCEPT OF RATIONALITY
Known vs. unknown: Strictly speaking, this distinction refers not to the environment itself but to the agent's (or designer's) state of knowledge about the "laws of physics" of the environment. In a known environment, the outcomes (or outcome probabilities if the environment is stochastic) for all actions are given. Obviously, if the environment is unknown, the agent will have to learn how it works in order to make good decisions. Note that the distinction between known and unknown environments is not the same as the one between fully and partially observable environments. It is quite possible for a known environment to be partially observable-for example, in solitaire card games, I know the rules but am still unable to see the cards that have not yet been turned over. Conversely, an unknown environment can be fully observable-in a new video game, the screen may show the entire game state but I still don't know what the buttons do until I try them.
As one might expect, the hardest case is partially observable, multiagent, stochastic, sequential, dynamic, continuous, and unknown. Taxi driving is hard in all these senses, except that for the most part the driver's environment is known. Driving a rented car in a new country with unfamiliar geography and traffic laws is a lot more exciting.

**Tiếng Việt:**
KHÁI NIỆM VỀ TÍNH HỢP LÝ
**Biết trước (Known) vs. chưa biết (unknown):** Nói một cách chính xác, sự phân biệt này không đề cập đến bản thân môi trường mà là trạng thái kiến thức của tác nhân (hoặc người thiết kế) về "các quy luật vật lý" của môi trường. Trong một môi trường biết trước, kết quả (hoặc xác suất kết quả nếu môi trường là ngẫu nhiên) cho tất cả các hành động đều được cho trước. Rõ ràng, nếu môi trường chưa được biết, tác nhân sẽ phải học cách nó hoạt động để đưa ra quyết định tốt. Lưu ý rằng sự phân biệt giữa môi trường biết trước và chưa biết không giống như sự phân biệt giữa môi trường quan sát được hoàn toàn và quan sát được một phần. Hoàn toàn có thể xảy ra trường hợp một môi trường biết trước lại chỉ quan sát được một phần—ví dụ, trong các trò chơi bài solitaire, tôi biết luật chơi nhưng vẫn không thể nhìn thấy những lá bài chưa được lật. Ngược lại, một môi trường chưa biết có thể quan sát được hoàn toàn—trong một trò chơi điện tử mới, màn hình có thể hiển thị toàn bộ trạng thái trò chơi nhưng tôi vẫn không biết các nút làm gì cho đến khi tôi thử chúng.
Như người ta có thể mong đợi, trường hợp khó nhất là môi trường quan sát được một phần, đa tác nhân, ngẫu nhiên, tuần tự, động, liên tục và chưa biết. Lái xe taxi khó khăn ở tất cả các khía cạnh này, ngoại trừ việc phần lớn môi trường của người lái xe là đã biết. Lái một chiếc xe thuê ở một quốc gia mới với địa lý và luật giao thông xa lạ sẽ thú vị hơn nhiều.

---

**Page 8**

THE STRUCTURE OF AGENTS
So far we have talked about agents by describing behavior—the action that is performed after any given sequence of percepts. Now we must bite the bullet and talk about how the insides work. The job of AI is to design an agent program that implements the agent function— the mapping from percepts to actions. We assume this program will run on some sort of computing device with physical sensors and actuators-we call this the architecture:
agent = architecture + program
Obviously, the program we choose has to be one that is appropriate for the architecture. If the program is going to recommend actions like Walk, the architecture had better have legs. The architecture might be just an ordinary PC, or it might be a robotic car with several onboard computers, cameras, and other sensors. In general, the architecture makes the percepts from the sensors available to the program, runs the program, and feeds the program's action choices to the actuators as they are generated. Most of this book is about designing agent programs, although Chapters 24 and 25 deal directly with the sensors and actuators.

**Tiếng Việt:**
CẤU TRÚC CỦA TÁC NHÂN
Cho đến nay, chúng ta đã nói về các tác nhân bằng cách mô tả hành vi—hành động được thực hiện sau bất kỳ chuỗi tri giác nào cho trước. Bây giờ chúng ta phải chấp nhận khó khăn và nói về cách hoạt động bên trong. Công việc của AI là thiết kế một chương trình tác nhân (agent program) thực thi hàm tác nhân (agent function)—ánh xạ từ tri giác sang hành động. Chúng ta giả định chương trình này sẽ chạy trên một loại thiết bị tính toán nào đó với các cảm biến và cơ cấu chấp hành vật lý—chúng ta gọi đây là kiến trúc (architecture):
**tác nhân = kiến trúc + chương trình**
Rõ ràng, chương trình chúng ta chọn phải phù hợp với kiến trúc. Nếu chương trình định đề xuất các hành động như *Đi bộ*, thì kiến trúc tốt hơn nên có chân. Kiến trúc có thể chỉ là một máy tính cá nhân thông thường, hoặc nó có thể là một chiếc xe robot với nhiều máy tính tích hợp, camera và các cảm biến khác. Nói chung, kiến trúc làm cho các tri giác từ các cảm biến có sẵn cho chương trình, chạy chương trình và cung cấp các lựa chọn hành động của chương trình cho các cơ cấu chấp hành khi chúng được tạo ra. Hầu hết cuốn sách này nói về việc thiết kế các chương trình tác nhân, mặc dù Chương 24 và 25 đề cập trực tiếp đến các cảm biến và cơ cấu chấp hành.

---

**Page 9**

THE STRUCTURE OF AGENTS
The agent programs that we design in this book all have the same skeleton: they take the current percept as input from the sensors and return an action to the actuators. Notice the difference between the agent program, which takes the current percept as input, and the agent function, which takes the entire percept history. The agent program takes just the current percept as input because nothing more is available from the environment; if the agent's actions need to depend on the entire percept sequence, the agent will have to remember the percepts.
We describe the agent programs in the simple pseudocode language that is defined in Appendix B. (The online code repository contains implementations in real programming

**Tiếng Việt:**
CẤU TRÚC CỦA TÁC NHÂN
Các chương trình tác nhân mà chúng ta thiết kế trong cuốn sách này đều có cùng một bộ khung: chúng nhận tri giác hiện tại làm đầu vào từ các cảm biến và trả về một hành động cho các cơ cấu chấp hành. Lưu ý sự khác biệt giữa chương trình tác nhân, nhận tri giác hiện tại làm đầu vào, và hàm tác nhân, nhận toàn bộ lịch sử tri giác. Chương trình tác nhân chỉ nhận tri giác hiện tại làm đầu vào vì không có gì khác có sẵn từ môi trường; nếu hành động của tác nhân cần phụ thuộc vào toàn bộ chuỗi tri giác, tác nhân sẽ phải ghi nhớ các tri giác đó.
Chúng ta mô tả các chương trình tác nhân bằng ngôn ngữ mã giả đơn giản được định nghĩa trong Phụ lục B. (Kho mã trực tuyến chứa các triển khai bằng ngôn ngữ lập trình thực tế

---

**Page 10**

THE STRUCTURE OF AGENTS
It is instructive to consider why the table-driven approach to agent construction is doomed to failure. Let P be the set of possible percepts and let T be the lifetime of the agent (the total number of percepts it will receive). The lookup table will contain Σ<sup>T</sup><sub>t=1</sub> |P|<sup>t</sup> entries. Consider the automated taxi: the visual input from a single camera comes in at the rate of roughly 27 megabytes per second (30 frames per second, 640 × 480 pixels with 24 bits of color information). This gives a lookup table with over 10<sup>250,000,000,000</sup> entries for an hour's driving. Even the lookup table for chess-a tiny, well-behaved fragment of the real world-would have at least 10<sup>150</sup> entries. The daunting size of these tables (the number of atoms in the observable universe is less than 10<sup>80</sup>) means that (a) no physical agent in this universe will have the space to store the table, (b) the designer would not have time to create the table, (c) no agent could ever learn all the right table entries from its experience, and (d) even if the environment is simple enough to yield a feasible table size, the designer still has no guidance about how to fill in the table entries.

**Tiếng Việt:**
CẤU TRÚC CỦA TÁC NHÂN
Việc xem xét tại sao phương pháp tiếp cận dựa trên bảng (table-driven) để xây dựng tác nhân lại thất bại là rất hữu ích. Gọi P là tập hợp các tri giác có thể có và T là tuổi thọ của tác nhân (tổng số tri giác mà nó sẽ nhận được). Bảng tra cứu sẽ chứa Σ<sup>T</sup><sub>t=1</sub> |P|<sup>t</sup> mục. Hãy xem xét chiếc taxi tự động: đầu vào hình ảnh từ một camera duy nhất có tốc độ khoảng 27 megabyte mỗi giây (30 khung hình mỗi giây, 640 × 480 pixel với 24 bit thông tin màu). Điều này tạo ra một bảng tra cứu với hơn 10<sup>250,000,000,000</sup> mục cho một giờ lái xe. Ngay cả bảng tra cứu cho cờ vua—một mảnh nhỏ, hoạt động tốt của thế giới thực—cũng sẽ có ít nhất 10<sup>150</sup> mục. Kích thước đáng sợ của các bảng này (số lượng nguyên tử trong vũ trụ quan sát được nhỏ hơn 10<sup>80</sup>) có nghĩa là (a) không một tác nhân vật lý nào trong vũ trụ này có đủ không gian để lưu trữ bảng, (b) người thiết kế sẽ không có thời gian để tạo ra bảng, (c) không một tác nhân nào có thể học được tất cả các mục đúng trong bảng từ kinh nghiệm của mình, và (d) ngay cả khi môi trường đủ đơn giản để tạo ra một kích thước bảng khả thi, người thiết kế vẫn không có hướng dẫn nào về cách điền vào các mục trong bảng.

---

**Page 11**

THE STRUCTURE OF AGENTS
Despite all this, TABLE-DRIVEN-AGENT does do what we want: it implements the desired agent function. The key challenge for AI is to find out how to write programs that, to the extent possible, produce rational behavior from a smallish program rather than from a vast table. We have many examples showing that this can be done successfully in other areas: for example, the huge tables of square roots used by engineers and schoolchildren prior to the 1970s have now been replaced by a five-line program for Newton's method running on electronic calculators. The question is, can AI do for general intelligent behavior what Newton did for square roots? We believe the answer is yes.
In the remainder of this section, we outline four basic kinds of agent programs that embody the principles underlying almost all intelligent systems:
*   Simple reflex agents;
*   Model-based reflex agents;
*   Goal-based agents; and
*   Utility-based agents.

**Tiếng Việt:**
CẤU TRÚC CỦA TÁC NHÂN
Mặc dù vậy, TÁC NHÂN ĐIỀU KHIỂN BẰNG BẢNG (TABLE-DRIVEN-AGENT) vẫn thực hiện những gì chúng ta muốn: nó thực thi hàm tác nhân mong muốn. Thách thức chính đối với AI là tìm ra cách viết các chương trình mà, trong chừng mực có thể, tạo ra hành vi hợp lý từ một chương trình tương đối nhỏ thay vì từ một bảng khổng lồ. Chúng ta có nhiều ví dụ cho thấy điều này có thể được thực hiện thành công trong các lĩnh vực khác: ví dụ, các bảng căn bậc hai khổng lồ được các kỹ sư và học sinh sử dụng trước những năm 1970 hiện đã được thay thế bằng một chương trình năm dòng cho phương pháp Newton chạy trên máy tính điện tử. Câu hỏi đặt ra là, liệu AI có thể làm được điều tương tự cho hành vi thông minh nói chung như Newton đã làm cho căn bậc hai không? Chúng tôi tin rằng câu trả lời là có.
Trong phần còn lại của mục này, chúng tôi phác thảo bốn loại chương trình tác nhân cơ bản thể hiện các nguyên tắc nền tảng của hầu hết các hệ thống thông minh:
*   Tác nhân phản xạ đơn giản (Simple reflex agents);
*   Tác nhân phản xạ dựa trên mô hình (Model-based reflex agents);
*   Tác nhân dựa trên mục tiêu (Goal-based agents); và
*   Tác nhân dựa trên độ hữu dụng (Utility-based agents).

---

**Page 12**

SIMPLE REFLEX AGENT
Simple reflex behaviors occur even in more complex environments. Imagine yourself as the driver of the automated taxi. If the car in front brakes and its brake lights come on, then you should notice this and initiate braking. In other words, some processing is done on the visual input to establish the condition we call “The car in front is braking." Then, this triggers some established connection in the agent program to the action “initiate braking." We call such a connection a condition-action rule, written as
if car-in-front-is-braking then initiate-braking.
Humans also have many such connections, some of which are learned responses (as for driving) and some of which are innate reflexes (such as blinking when something approaches the eye). In the course of the book, we show several different ways in which such connections can be learned and implemented.
The program in Figure 2.8 is specific to one particular vacuum environment. A more general and flexible approach is first to build a general-purpose interpreter for condition-action rules and then to create rule sets for specific task environments. Figure 2.9 gives the structure of this general program in schematic form, showing how the condition-action rules

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ ĐƠN GIẢN
Các hành vi phản xạ đơn giản xảy ra ngay cả trong các môi trường phức tạp hơn. Hãy tưởng tượng bạn là người lái chiếc taxi tự động. Nếu chiếc xe phía trước phanh và đèn phanh của nó sáng lên, thì bạn nên nhận thấy điều này và bắt đầu phanh. Nói cách khác, một số xử lý được thực hiện trên đầu vào hình ảnh để xác định điều kiện mà chúng ta gọi là "Xe phía trước đang phanh." Sau đó, điều này kích hoạt một số kết nối đã được thiết lập trong chương trình tác nhân với hành động "bắt đầu phanh." Chúng ta gọi một kết nối như vậy là một quy tắc điều kiện-hành động (condition-action rule), được viết dưới dạng:
**nếu** xe-phía-trước-đang-phanh **thì** bắt-đầu-phanh.
Con người cũng có nhiều kết nối như vậy, một số là phản ứng học được (như khi lái xe) và một số là phản xạ bẩm sinh (như chớp mắt khi có vật gì đó đến gần mắt). Trong suốt cuốn sách, chúng tôi trình bày một số cách khác nhau để các kết nối như vậy có thể được học và triển khai.
Chương trình trong Hình 2.8 là đặc thù cho một môi trường máy hút bụi cụ thể. Một cách tiếp cận tổng quát và linh hoạt hơn là trước tiên xây dựng một bộ thông dịch đa năng cho các quy tắc điều kiện-hành động và sau đó tạo các bộ quy tắc cho các môi trường tác vụ cụ thể. Hình 2.9 đưa ra cấu trúc của chương trình tổng quát này dưới dạng sơ đồ, cho thấy các quy tắc điều kiện-hành động

---

**Page 13**

SIMPLE REFLEX AGENT
function REFLEX-VACUUM-AGENT([location,status]) returns an action
if status = Dirty then return Suck
else if location = A then return Right
else if location = B then return Left

Figure 2.8 The agent program for a simple reflex agent in the two-state vacuum environment. This program implements the agent function tabulated in Figure 2.3.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ ĐƠN GIẢN
hàm REFLEX-VACUUM-AGENT([vị_trí, trạng_thái]) trả về một hành động
**nếu** trạng_thái = Bẩn **thì trả về** Hút
**ngược lại nếu** vị_trí = A **thì trả về** Phải
**ngược lại nếu** vị_trí = B **thì trả về** Trái

Hình 2.8 Chương trình tác nhân cho một tác nhân phản xạ đơn giản trong môi trường máy hút bụi hai trạng thái. Chương trình này thực thi hàm tác nhân được liệt kê trong Hình 2.3.

---

**Page 14**

SIMPLE REFLEX AGENT
[Schematic diagram of a simple reflex agent: Sensors -> "What the world is like now" -> (combined with Condition-action rules) -> "What action I should do now" -> Actuators. Agent interacts with Environment.]

Figure 2.9 Schematic diagram of a simple reflex agent.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ ĐƠN GIẢN
[Sơ đồ khối của một tác nhân phản xạ đơn giản: Cảm biến -> "Thế giới hiện tại như thế nào" -> (kết hợp với Các quy tắc điều kiện-hành động) -> "Tôi nên làm hành động gì bây giờ" -> Cơ cấu chấp hành. Tác nhân tương tác với Môi trường.]

Hình 2.9 Sơ đồ khối của một tác nhân phản xạ đơn giản.

---

**Page 15**

SIMPLE REFLEX AGENT
function SIMPLE-REFLEX-AGENT(percept) returns an action
persistent: rules, a set of condition-action rules

state ← INTERPRET-INPUT(percept)
rule ← RULE-MATCH(state, rules)
action ← rule.ACTION
return action

Figure 2.10 A simple reflex agent. It acts according to a rule whose condition matches the current state, as defined by the percept.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ ĐƠN GIẢN
hàm SIMPLE-REFLEX-AGENT(tri_giác) trả về một hành động
**persistent:** rules, một tập hợp các quy tắc điều kiện-hành động

state ← INTERPRET-INPUT(tri_giác)
rule ← RULE-MATCH(state, rules)
action ← rule.ACTION
**trả về** action

Hình 2.10 Một tác nhân phản xạ đơn giản. Nó hành động theo một quy tắc có điều kiện khớp với trạng thái hiện tại, được xác định bởi tri giác.

---

**Page 16**

SIMPLE REFLEX AGENT
We can see a similar problem arising in the vacuum world. Suppose that a simple reflex vacuum agent is deprived of its location sensor and has only a dirt sensor. Such an agent has just two possible percepts: [Dirty] and [Clean]. It can Suck in response to [Dirty]; what should it do in response to [Clean]? Moving Left fails (forever) if it happens to start in square A, and moving Right fails (forever) if it happens to start in square B. Infinite loops are often unavoidable for simple reflex agents operating in partially observable environments.
Escape from infinite loops is possible if the agent can randomize its actions. For example, if the vacuum agent perceives [Clean], it might flip a coin to choose between Left and Right. It is easy to show that the agent will reach the other square in an average of two steps. Then, if that square is dirty, the agent will clean it and the task will be complete. Hence, a randomized simple reflex agent might outperform a deterministic simple reflex agent.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ ĐƠN GIẢN
Chúng ta có thể thấy một vấn đề tương tự phát sinh trong thế giới máy hút bụi. Giả sử một tác nhân hút bụi phản xạ đơn giản bị mất cảm biến vị trí và chỉ có cảm biến bụi. Một tác nhân như vậy chỉ có hai tri giác có thể: [Bẩn] và [Sạch]. Nó có thể Hút để phản ứng với [Bẩn]; nó nên làm gì để phản ứng với [Sạch]? Di chuyển Trái sẽ thất bại (mãi mãi) nếu nó tình cờ bắt đầu ở ô A, và di chuyển Phải sẽ thất bại (mãi mãi) nếu nó tình cờ bắt đầu ở ô B. Vòng lặp vô hạn thường không thể tránh khỏi đối với các tác nhân phản xạ đơn giản hoạt động trong môi trường quan sát được một phần.
Thoát khỏi vòng lặp vô hạn là có thể nếu tác nhân có thể ngẫu nhiên hóa hành động của mình. Ví dụ, nếu tác nhân hút bụi nhận thấy [Sạch], nó có thể tung đồng xu để chọn giữa Trái và Phải. Dễ dàng chỉ ra rằng tác nhân sẽ đến được ô kia trung bình sau hai bước. Sau đó, nếu ô đó bẩn, tác nhân sẽ làm sạch nó và nhiệm vụ sẽ hoàn thành. Do đó, một tác nhân phản xạ đơn giản ngẫu nhiên hóa có thể hoạt động tốt hơn một tác nhân phản xạ đơn giản tất định.

---

**Page 17**

MODEL-BASED REFLEX AGENTS
The most effective way to handle partial observability is for the agent to keep track of the part of the world it can't see now. That is, the agent should maintain some sort of internal state that depends on the percept history and thereby reflects at least some of the unobserved aspects of the current state. For the braking problem, the internal state is not too extensive— just the previous frame from the camera, allowing the agent to detect when two red lights at the edge of the vehicle go on or off simultaneously. For other driving tasks such as changing lanes, the agent needs to keep track of where the other cars are if it can't see them all at once. And for any driving to be possible at all, the agent needs to keep track of where its keys are.
Updating this internal state information as time goes by requires two kinds of knowledge to be encoded in the agent program. First, we need some information about how the world evolves independently of the agent-for example, that an overtaking car generally will be closer behind than it was a moment ago. Second, we need some information about how the agent's own actions affect the world-for example, that when the agent turns the steering wheel clockwise, the car turns to the right, or that after driving for five minutes northbound on the freeway, one is usually about five miles north of where one was five minutes ago. This knowledge about “how the world works”—whether implemented in simple Boolean circuits or in complete scientific theories-is called a model of the world. An agent that uses such a model is called a model-based agent.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ DỰA TRÊN MÔ HÌNH
Cách hiệu quả nhất để xử lý tính quan sát được một phần là tác nhân phải theo dõi phần thế giới mà nó không thể nhìn thấy hiện tại. Nghĩa là, tác nhân nên duy trì một loại trạng thái nội tại nào đó phụ thuộc vào lịch sử tri giác và do đó phản ánh ít nhất một số khía cạnh không quan sát được của trạng thái hiện tại. Đối với vấn đề phanh xe, trạng thái nội tại không quá phức tạp—chỉ cần khung hình trước đó từ camera, cho phép tác nhân phát hiện khi hai đèn đỏ ở rìa xe bật hoặc tắt đồng thời. Đối với các tác vụ lái xe khác như chuyển làn, tác nhân cần theo dõi vị trí của các xe khác nếu nó không thể nhìn thấy tất cả chúng cùng một lúc. Và để có thể lái xe, tác nhân cần theo dõi vị trí chìa khóa của mình.
Việc cập nhật thông tin trạng thái nội tại này theo thời gian đòi hỏi hai loại kiến thức phải được mã hóa trong chương trình tác nhân. Thứ nhất, chúng ta cần một số thông tin về cách thế giới tiến triển độc lập với tác nhân—ví dụ, một chiếc xe vượt thường sẽ ở gần phía sau hơn so với một khoảnh khắc trước đó. Thứ hai, chúng ta cần một số thông tin về cách hành động của chính tác nhân ảnh hưởng đến thế giới—ví dụ, khi tác nhân xoay vô lăng theo chiều kim đồng hồ, xe sẽ rẽ phải, hoặc sau khi lái xe năm phút về phía bắc trên đường cao tốc, người ta thường ở cách vị trí năm phút trước đó khoảng năm dặm về phía bắc. Kiến thức này về "cách thế giới hoạt động"—cho dù được triển khai trong các mạch Boolean đơn giản hay trong các lý thuyết khoa học hoàn chỉnh—được gọi là một mô hình của thế giới. Một tác nhân sử dụng một mô hình như vậy được gọi là một tác nhân dựa trên mô hình (model-based agent).

---

**Page 18**

MODEL-BASED REFLEX AGENTS
Figure 2.11 gives the structure of the model-based reflex agent with internal state, showing how the current percept is combined with the old internal state to generate the updated description of the current state, based on the agent's model of how the world works. The agent program is shown in Figure 2.12. The interesting part is the function UPDATE-STATE, which
[Schematic diagram of a model-based reflex agent: Sensors -> "What the world is like now". This input, along with "State" (internal state) and "What my actions do" and "How the world evolves" (components of the model), feeds into updating the "State". The updated "State" and "Condition-action rules" determine "What action I should do now" -> Actuators. Agent interacts with Environment.]

Figure 2.11 A model-based reflex agent.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ DỰA TRÊN MÔ HÌNH
Hình 2.11 đưa ra cấu trúc của tác nhân phản xạ dựa trên mô hình với trạng thái nội tại, cho thấy tri giác hiện tại được kết hợp với trạng thái nội tại cũ như thế nào để tạo ra mô tả cập nhật về trạng thái hiện tại, dựa trên mô hình của tác nhân về cách thế giới hoạt động. Chương trình tác nhân được trình bày trong Hình 2.12. Phần thú vị là hàm UPDATE-STATE, hàm này
[Sơ đồ khối của một tác nhân phản xạ dựa trên mô hình: Cảm biến -> "Thế giới hiện tại như thế nào". Đầu vào này, cùng với "Trạng thái" (trạng thái nội tại) và "Hành động của tôi làm gì" cũng như "Thế giới tiến triển như thế nào" (các thành phần của mô hình), được đưa vào để cập nhật "Trạng thái". "Trạng thái" đã cập nhật và "Các quy tắc điều kiện-hành động" xác định "Tôi nên làm hành động gì bây giờ" -> Cơ cấu chấp hành. Tác nhân tương tác với Môi trường.]

Hình 2.11 Một tác nhân phản xạ dựa trên mô hình.

---

**Page 19**

MODEL-BASED REFLEX AGENTS
function MODEL-BASED-REFLEX-AGENT(percept) returns an action
persistent: state, the agent's current conception of the world state
model, a description of how the next state depends on current state and action
rules, a set of condition-action rules
action, the most recent action, initially none

state ← UPDATE-STATE(state, action, percept, model)
rule ← RULE-MATCH(state, rules)
action ← rule.ACTION
return action

Figure 2.12 A model-based reflex agent. It keeps track of the current state of the world, using an internal model. It then chooses an action in the same way as the reflex agent.
is responsible for creating the new internal state description. The details of how models and states are represented vary widely depending on the type of environment and the particular technology used in the agent design. Detailed examples of models and updating algorithms appear in Chapters 4, 12, 11, 15, 17, and 25.

**Tiếng Việt:**
TÁC NHÂN PHẢN XẠ DỰA TRÊN MÔ HÌNH
hàm MODEL-BASED-REFLEX-AGENT(tri_giác) trả về một hành động
**persistent:** state, quan niệm hiện tại của tác nhân về trạng thái thế giới
model, mô tả về cách trạng thái tiếp theo phụ thuộc vào trạng thái hiện tại và hành động
rules, một tập hợp các quy tắc điều kiện-hành động
action, hành động gần đây nhất, ban đầu là không có

state ← UPDATE-STATE(state, action, tri_giác, model)
rule ← RULE-MATCH(state, rules)
action ← rule.ACTION
**trả về** action

Hình 2.12 Một tác nhân phản xạ dựa trên mô hình. Nó theo dõi trạng thái hiện tại của thế giới, sử dụng một mô hình nội tại. Sau đó, nó chọn một hành động theo cách tương tự như tác nhân phản xạ.
chịu trách nhiệm tạo ra mô tả trạng thái nội tại mới. Chi tiết về cách các mô hình và trạng thái được biểu diễn rất khác nhau tùy thuộc vào loại môi trường và công nghệ cụ thể được sử dụng trong thiết kế tác nhân. Các ví dụ chi tiết về các mô hình và thuật toán cập nhật xuất hiện trong các Chương 4, 12, 11, 15, 17 và 25.

---

**Page 20**

SOLVING PROBLEM BY SEARCHING
Imagine an agent in the city of Arad, Romania, enjoying a touring holiday. The agent's performance measure contains many factors: it wants to improve its suntan, improve its Romanian, take in the sights, enjoy the nightlife (such as it is), avoid hangovers, and so on. The decision problem is a complex one involving many tradeoffs and careful reading of guidebooks. Now, suppose the agent has a nonrefundable ticket to fly out of Bucharest the following day. In that case, it makes sense for the agent to adopt the goal of getting to Bucharest. Courses of action that don't reach Bucharest on time can be rejected without further consideration and the agent's decision problem is greatly simplified. Goals help organize behavior by limiting the objectives that the agent is trying to achieve and hence the actions it needs to consider. Goal formulation, based on the current situation and the agent's performance measure, is the first step in problem solving.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Hãy tưởng tượng một tác nhân đang ở thành phố Arad, Romania, tận hưởng một kỳ nghỉ du lịch. Thước đo hiệu suất của tác nhân chứa nhiều yếu tố: nó muốn cải thiện làn da rám nắng, cải thiện tiếng Rumani, ngắm cảnh, tận hưởng cuộc sống về đêm (nếu có), tránh say xỉn, v.v. Vấn đề ra quyết định là một vấn đề phức tạp liên quan đến nhiều sự đánh đổi và việc đọc kỹ sách hướng dẫn. Bây giờ, giả sử tác nhân có một vé máy bay không hoàn lại để bay khỏi Bucharest vào ngày hôm sau. Trong trường hợp đó, việc tác nhân đặt mục tiêu đến Bucharest là hợp lý. Các phương án hành động không đến Bucharest đúng giờ có thể bị loại bỏ mà không cần xem xét thêm và vấn đề ra quyết định của tác nhân được đơn giản hóa rất nhiều. Mục tiêu giúp tổ chức hành vi bằng cách giới hạn các mục tiêu mà tác nhân đang cố gắng đạt được và do đó là các hành động mà nó cần xem xét. Xây dựng mục tiêu (Goal formulation), dựa trên tình hình hiện tại và thước đo hiệu suất của tác nhân, là bước đầu tiên trong việc giải quyết vấn đề.

---

**Page 21**

SOLVING PROBLEM BY SEARCHING
We will consider a goal to be a set of world states-exactly those states in which the goal is satisfied. The agent's task is to find out how to act, now and in the future, so that it reaches a goal state. Before it can do this, it needs to decide (or we need to decide on its behalf) what sorts of actions and states it should consider. If it were to consider actions at the level of “move the left foot forward an inch” or “turn the steering wheel one degree left," the agent would probably never find its way out of the parking lot, let alone to Bucharest, because at that level of detail there is too much uncertainty in the world and there would be too many steps in a solution. Problem formulation is the process of deciding what actions and states to consider, given a goal. We discuss this process in more detail later. For now, let us assume that the agent will consider actions at the level of driving from one major town to another. Each state therefore corresponds to being in a particular town.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Chúng ta sẽ coi một mục tiêu là một tập hợp các trạng thái thế giới—chính xác là những trạng thái mà trong đó mục tiêu được thỏa mãn. Nhiệm vụ của tác nhân là tìm ra cách hành động, hiện tại và trong tương lai, để nó đạt được một trạng thái mục tiêu. Trước khi có thể làm điều này, nó cần quyết định (hoặc chúng ta cần quyết định thay cho nó) những loại hành động và trạng thái nào nó nên xem xét. Nếu nó xem xét các hành động ở mức độ "di chuyển chân trái về phía trước một inch" hoặc "xoay vô lăng sang trái một độ," tác nhân có lẽ sẽ không bao giờ tìm được đường ra khỏi bãi đậu xe, chứ đừng nói đến Bucharest, bởi vì ở mức độ chi tiết đó có quá nhiều sự không chắc chắn trong thế giới và sẽ có quá nhiều bước trong một giải pháp. Xây dựng bài toán (Problem formulation) là quá trình quyết định những hành động và trạng thái nào cần xem xét, với một mục tiêu cho trước. Chúng ta sẽ thảo luận chi tiết hơn về quá trình này sau. Hiện tại, chúng ta hãy giả sử rằng tác nhân sẽ xem xét các hành động ở mức độ lái xe từ một thị trấn lớn này đến một thị trấn lớn khác. Do đó, mỗi trạng thái tương ứng với việc đang ở một thị trấn cụ thể.

---

**Page 22**

SOLVING PROBLEM BY SEARCHING
Our agent has now adopted the goal of driving to Bucharest and is considering where to go from Arad. Three roads lead out of Arad, one toward Sibiu, one to Timisoara, and one to Zerind. None of these achieves the goal, so unless the agent is familiar with the geography of Romania, it will not know which road to follow. In other words, the agent will not know which of its possible actions is best, because it does not yet know enough about the state that results from taking each action. If the agent has no additional information—i.e., if the environment is unknown in the sense defined in Section 2.3-then it is has no choice but to try one of the actions at random. This sad situation is discussed in Chapter 4.
But suppose the agent has a map of Romania. The point of a map is to provide the agent with information about the states it might get itself into and the actions it can take. The agent can use this information to consider subsequent stages of a hypothetical journey via each of the three towns, trying to find a journey that eventually gets to Bucharest. Once it has found a path on the map from Arad to Bucharest, it can achieve its goal by carrying out the driving actions that correspond to the legs of the journey. In general, an agent with several immediate options of unknown value can decide what to do by first examining future actions that eventually lead to states of known value.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Tác nhân của chúng ta hiện đã đặt mục tiêu lái xe đến Bucharest và đang xem xét nên đi đâu từ Arad. Có ba con đường dẫn ra khỏi Arad, một con đường về phía Sibiu, một con đường đến Timisoara, và một con đường đến Zerind. Không con đường nào trong số này đạt được mục tiêu, vì vậy trừ khi tác nhân quen thuộc với địa lý của Romania, nó sẽ không biết nên đi theo con đường nào. Nói cách khác, tác nhân sẽ không biết hành động nào trong số các hành động có thể của nó là tốt nhất, bởi vì nó chưa biết đủ về trạng thái kết quả từ việc thực hiện mỗi hành động. Nếu tác nhân không có thông tin bổ sung—tức là, nếu môi trường là chưa biết theo nghĩa được định nghĩa trong Mục 2.3—thì nó không có lựa chọn nào khác ngoài việc thử một trong các hành động một cách ngẫu nhiên. Tình huống đáng buồn này được thảo luận trong Chương 4.
Nhưng giả sử tác nhân có một bản đồ Romania. Mục đích của bản đồ là cung cấp cho tác nhân thông tin về các trạng thái mà nó có thể gặp phải và các hành động mà nó có thể thực hiện. Tác nhân có thể sử dụng thông tin này để xem xét các giai đoạn tiếp theo của một hành trình giả định qua mỗi trong ba thị trấn, cố gắng tìm một hành trình cuối cùng đến được Bucharest. Một khi nó đã tìm thấy một con đường trên bản đồ từ Arad đến Bucharest, nó có thể đạt được mục tiêu của mình bằng cách thực hiện các hành động lái xe tương ứng với các chặng của hành trình. Nói chung, một tác nhân có một số lựa chọn tức thời với giá trị chưa biết có thể quyết định phải làm gì bằng cách trước tiên kiểm tra các hành động trong tương lai mà cuối cùng dẫn đến các trạng thái có giá trị đã biết.

---

**Page 23**

SOLVING PROBLEM BY SEARCHING
we assume that the environment is observable, so the agent always knows the current state. For the agent driving in Romania, it's reasonable to suppose that each city on the map has a sign indicating its presence to arriving drivers. We also assume the environment is discrete, so at any given state there are only finitely many actions to choose from. This is true for navigating in Romania because each city is connected to a small number of other cities. We will assume the environment is known, so the agent knows which states are reached by each action. (Having an accurate map suffices to meet this condition for navigation problems.) Finally, we assume that the environment is deterministic, so each action has exactly one outcome. Under ideal conditions, this is true for the agent in Romania-it means that if it chooses to drive from Arad to Sibiu, it does end up in Sibiu. Of course, conditions are not always ideal, as we show in Chapter 4.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
chúng ta giả định rằng môi trường là quan sát được (observable), vì vậy tác nhân luôn biết trạng thái hiện tại. Đối với tác nhân lái xe ở Romania, việc giả sử rằng mỗi thành phố trên bản đồ đều có một biển báo cho biết sự hiện diện của nó đối với các tài xế đến là hợp lý. Chúng ta cũng giả định môi trường là rời rạc (discrete), vì vậy tại bất kỳ trạng thái nào cho trước, chỉ có một số hữu hạn các hành động để lựa chọn. Điều này đúng đối với việc điều hướng ở Romania vì mỗi thành phố được kết nối với một số ít các thành phố khác. Chúng ta sẽ giả định môi trường là đã biết (known), vì vậy tác nhân biết trạng thái nào sẽ đạt được bằng mỗi hành động. (Việc có một bản đồ chính xác là đủ để đáp ứng điều kiện này cho các vấn đề điều hướng.) Cuối cùng, chúng ta giả định rằng môi trường là tất định (deterministic), vì vậy mỗi hành động chỉ có một kết quả duy nhất. Trong điều kiện lý tưởng, điều này đúng đối với tác nhân ở Romania—điều đó có nghĩa là nếu nó chọn lái xe từ Arad đến Sibiu, nó sẽ đến được Sibiu. Tất nhiên, các điều kiện không phải lúc nào cũng lý tưởng, như chúng ta sẽ trình bày trong Chương 4.

---

**Page 24**

SOLVING PROBLEM BY SEARCHING
The process of looking for a sequence of actions that reaches the goal is called search. A search algorithm takes a problem as input and returns a solution in the form of an action sequence. Once a solution is found, the actions it recommends can be carried out. This is called the execution phase. Thus, we have a simple "formulate, search, execute" design for the agent, as shown in Figure 3.1. After formulating a goal and a problem to solve, the agent calls a search procedure to solve it. It then uses the solution to guide its actions, doing whatever the solution recommends as the next thing to do-typically, the first action of the sequence—and then removing that step from the sequence. Once the solution has been executed, the agent will formulate a new goal.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Quá trình tìm kiếm một chuỗi các hành động đạt được mục tiêu được gọi là tìm kiếm (search). Một thuật toán tìm kiếm nhận một bài toán làm đầu vào và trả về một giải pháp (solution) dưới dạng một chuỗi hành động. Một khi giải pháp được tìm thấy, các hành động mà nó đề xuất có thể được thực hiện. Đây được gọi là giai đoạn thực thi (execution phase). Do đó, chúng ta có một thiết kế đơn giản "xây dựng bài toán, tìm kiếm, thực thi" ("formulate, search, execute") cho tác nhân, như được trình bày trong Hình 3.1. Sau khi xây dựng một mục tiêu và một bài toán cần giải quyết, tác nhân gọi một thủ tục tìm kiếm để giải quyết nó. Sau đó, nó sử dụng giải pháp để hướng dẫn hành động của mình, thực hiện bất cứ điều gì giải pháp đề xuất làm điều tiếp theo—thường là hành động đầu tiên của chuỗi—và sau đó loại bỏ bước đó khỏi chuỗi. Một khi giải pháp đã được thực thi, tác nhân sẽ xây dựng một mục tiêu mới.

---

**Page 25**

SOLVING PROBLEM BY SEARCHING
Notice that while the agent is executing the solution sequence it ignores its percepts when choosing an action because it knows in advance what they will be. An agent that carries out its plans with its eyes closed, so to speak, must be quite certain of what is going on. Control theorists call this an open-loop system, because ignoring the percepts breaks the loop between agent and environment.
We first describe the process of problem formulation, and then devote the bulk of the chapter to various algorithms for the SEARCH function. We do not discuss the workings of the UPDATE-STATE and FORMULATE-GOAL functions further in this chapter.
3.1.1 Well-defined problems and solutions
A problem can be defined formally by five components:
*   The initial state that the agent starts in. For example, the initial state for our agent in Romania might be described as In(Arad).

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Lưu ý rằng trong khi tác nhân đang thực thi chuỗi giải pháp, nó bỏ qua các tri giác của mình khi chọn một hành động bởi vì nó biết trước chúng sẽ như thế nào. Một tác nhân thực hiện kế hoạch của mình mà như thể nhắm mắt, nói một cách ví von, phải khá chắc chắn về những gì đang diễn ra. Các nhà lý thuyết điều khiển gọi đây là một hệ thống vòng hở (open-loop system), bởi vì việc bỏ qua các tri giác sẽ phá vỡ vòng lặp giữa tác nhân và môi trường.
Trước tiên, chúng tôi mô tả quá trình xây dựng bài toán, và sau đó dành phần lớn của chương cho các thuật toán khác nhau cho hàm TÌM KIẾM (SEARCH). Chúng tôi không thảo luận thêm về hoạt động của các hàm UPDATE-STATE và FORMULATE-GOAL trong chương này.
3.1.1 Các bài toán và giải pháp được xác định rõ ràng
Một bài toán có thể được định nghĩa chính thức bằng năm thành phần:
*   **Trạng thái ban đầu (initial state)** mà tác nhân bắt đầu. Ví dụ, trạng thái ban đầu cho tác nhân của chúng ta ở Romania có thể được mô tả là Ở(Arad) (In(Arad)).

---

**Page 26**

SOLVING PROBLEM BY SEARCHING
*   A description of the possible actions available to the agent. Given a particular state s, ACTIONS(s) returns the set of actions that can be executed in s. We say that each of these actions is applicable in s. For example, from the state In(Arad), the applicable actions are {Go(Sibiu), Go(Timisoara), Go(Zerind)}.
*   A description of what each action does; the formal name for this is the transition model, specified by a function RESULT(s, a) that returns the state that results from doing action a in state s. We also use the term successor to refer to any state reachable from a given state by a single action. For example, we have RESULT(In(Arad), Go(Zerind)) = In(Zerind).

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
*   Một mô tả về các **hành động (actions)** có thể có sẵn cho tác nhân. Với một trạng thái s cụ thể, HÀNHĐỘNG(s) (ACTIONS(s)) trả về tập hợp các hành động có thể được thực hiện trong s. Chúng ta nói rằng mỗi hành động này là có thể áp dụng (applicable) trong s. Ví dụ, từ trạng thái Ở(Arad), các hành động có thể áp dụng là {Đi(Sibiu), Đi(Timisoara), Đi(Zerind)}.
*   Một mô tả về những gì mỗi hành động thực hiện; tên chính thức cho điều này là **mô hình chuyển tiếp (transition model)**, được xác định bởi một hàm KẾTQUẢ(s, a) (RESULT(s, a)) trả về trạng thái kết quả từ việc thực hiện hành động a trong trạng thái s. Chúng ta cũng sử dụng thuật ngữ **trạng thái kế tiếp (successor)** để chỉ bất kỳ trạng thái nào có thể đạt được từ một trạng thái cho trước bằng một hành động duy nhất. Ví dụ, chúng ta có KẾTQUẢ(Ở(Arad), Đi(Zerind)) = Ở(Zerind).

---

**Page 27**

SOLVING PROBLEM BY SEARCHING
Together, the initial state, actions, and transition model implicitly define the state space of the problem—the set of all states reachable from the initial state by any sequence of actions. The state space forms a directed network or graph in which the nodes are states and the links between nodes are actions. (The map of Romania shown in Figure 3.2 can be interpreted as a state-space graph if we view each road as standing for two driving actions, one in each direction.) A path in the state space is a sequence of states connected by a sequence of actions.
*   The goal test, which determines whether a given state is a goal state. Sometimes there is an explicit set of possible goal states, and the test simply checks whether the given state is one of them. The agent's goal in Romania is the singleton set {In(Bucharest)}.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
Cùng nhau, trạng thái ban đầu, các hành động và mô hình chuyển tiếp ngầm định nghĩa **không gian trạng thái (state space)** của bài toán—tập hợp tất cả các trạng thái có thể đạt được từ trạng thái ban đầu bằng bất kỳ chuỗi hành động nào. Không gian trạng thái tạo thành một mạng có hướng hoặc đồ thị trong đó các nút là các trạng thái và các liên kết giữa các nút là các hành động. (Bản đồ Romania được hiển thị trong Hình 3.2 có thể được hiểu là một đồ thị không gian trạng thái nếu chúng ta xem mỗi con đường đại diện cho hai hành động lái xe, một hành động theo mỗi hướng.) Một **đường đi (path)** trong không gian trạng thái là một chuỗi các trạng thái được kết nối bởi một chuỗi các hành động.
*   **Phép thử mục tiêu (goal test)**, xác định xem một trạng thái cho trước có phải là trạng thái mục tiêu hay không. Đôi khi có một tập hợp rõ ràng các trạng thái mục tiêu có thể có, và phép thử chỉ đơn giản là kiểm tra xem trạng thái cho trước có phải là một trong số đó hay không. Mục tiêu của tác nhân ở Romania là tập hợp đơn {Ở(Bucharest)}.

---

**Page 28**

SOLVING PROBLEM BY SEARCHING
*   A path cost function that assigns a numeric cost to each path. The problem-solving agent chooses a cost function that reflects its own performance measure. For the agent trying to get to Bucharest, time is of the essence, so the cost of a path might be its length in kilometers. In this chapter, we assume that the cost of a path can be described as the sum of the costs of the individual actions along the path. The step cost of taking action a in state s to reach state s' is denoted by c(s, a, s'). The step costs for Romania are shown in Figure 3.2 as route distances. We assume that step costs are nonnegative.
The preceding elements define a problem and can be gathered into a single data structure that is given as input to a problem-solving algorithm. A solution to a problem is an action sequence that leads from the initial state to a goal state. Solution quality is measured by the path cost function, and an optimal solution has the lowest path cost among all solutions.

**Tiếng Việt:**
GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
*   Một **hàm chi phí đường đi (path cost function)** gán một chi phí số cho mỗi đường đi. Tác nhân giải quyết vấn đề chọn một hàm chi phí phản ánh thước đo hiệu suất của chính nó. Đối với tác nhân đang cố gắng đến Bucharest, thời gian là yếu tố cốt yếu, vì vậy chi phí của một đường đi có thể là chiều dài của nó tính bằng kilomet. Trong chương này, chúng ta giả định rằng chi phí của một đường đi có thể được mô tả bằng tổng chi phí của các hành động riêng lẻ dọc theo đường đi đó. **Chi phí bước (step cost)** của việc thực hiện hành động a trong trạng thái s để đạt được trạng thái s' được ký hiệu là c(s, a, s'). Chi phí bước cho Romania được hiển thị trong Hình 3.2 dưới dạng khoảng cách tuyến đường. Chúng ta giả định rằng chi phí bước là không âm.
Các yếu tố trên xác định một bài toán và có thể được tập hợp thành một cấu trúc dữ liệu duy nhất được cung cấp làm đầu vào cho một thuật toán giải quyết vấn đề. Một **giải pháp (solution)** cho một bài toán là một chuỗi hành động dẫn từ trạng thái ban đầu đến trạng thái mục tiêu. Chất lượng giải pháp được đo bằng hàm chi phí đường đi, và một **giải pháp tối ưu (optimal solution)** có chi phí đường đi thấp nhất trong số tất cả các giải pháp.

---

**Page 29**

EXAMPLE PROBLEMS
3.2.1 Toy problems
The first example we examine is the vacuum world first introduced in Chapter 2. (See Figure 2.2.) This can be formulated as a problem as follows:
*   States: The state is determined by both the agent location and the dirt locations. The agent is in one of two locations, each of which might or might not contain dirt. Thus, there are 2 × 2<sup>2</sup> = 8 possible world states. A larger environment with n locations has n * 2<sup>n</sup> states.
*   Initial state: Any state can be designated as the initial state.
*   Actions: In this simple environment, each state has just three actions: Left, Right, and Suck. Larger environments might also include Up and Down.
*   Transition model: The actions have their expected effects, except that moving Left in the leftmost square, moving Right in the rightmost square, and Sucking in a clean square have no effect. The complete state space is shown in Figure 3.3.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
3.2.1 Các bài toán đồ chơi (Toy problems)
Ví dụ đầu tiên chúng ta xem xét là thế giới máy hút bụi (vacuum world) được giới thiệu lần đầu trong Chương 2. (Xem Hình 2.2.) Bài toán này có thể được xây dựng như sau:
*   **Trạng thái (States):** Trạng thái được xác định bởi cả vị trí của tác nhân và vị trí của bụi. Tác nhân ở một trong hai vị trí, mỗi vị trí có thể có hoặc không có bụi. Do đó, có 2 × 2<sup>2</sup> = 8 trạng thái thế giới có thể. Một môi trường lớn hơn với n vị trí có n * 2<sup>n</sup> trạng thái.
*   **Trạng thái ban đầu (Initial state):** Bất kỳ trạng thái nào cũng có thể được chỉ định là trạng thái ban đầu.
*   **Hành động (Actions):** Trong môi trường đơn giản này, mỗi trạng thái chỉ có ba hành động: Trái (Left), Phải (Right), và Hút (Suck). Các môi trường lớn hơn cũng có thể bao gồm Lên (Up) và Xuống (Down).
*   **Mô hình chuyển tiếp (Transition model):** Các hành động có tác dụng như mong đợi, ngoại trừ việc di chuyển Trái ở ô ngoài cùng bên trái, di chuyển Phải ở ô ngoài cùng bên phải, và Hút ở một ô sạch không có tác dụng. Không gian trạng thái hoàn chỉnh được hiển thị trong Hình 3.3.

---

**Page 30**

EXAMPLE PROBLEMS
*   Goal test: This checks whether all the squares are clean.
*   Path cost: Each step costs 1, so the path cost is the number of steps in the path.
Compared with the real world, this toy problem has discrete locations, discrete dirt, reliable cleaning, and it never gets any dirtier. Chapter 4 relaxes some of these assumptions.
The 8-puzzle, an instance of which is shown in Figure 3.4, consists of a 3×3 board with eight numbered tiles and a blank space. A tile adjacent to the blank space can slide into the space. The object is to reach a specified goal state, such as the one shown on the right of the figure. The standard formulation is as follows:

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
*   **Phép thử mục tiêu (Goal test):** Kiểm tra xem tất cả các ô đã sạch chưa.
*   **Chi phí đường đi (Path cost):** Mỗi bước tốn 1, vì vậy chi phí đường đi là số bước trong đường đi.
So với thế giới thực, bài toán đồ chơi này có các vị trí rời rạc, bụi rời rạc, việc làm sạch đáng tin cậy và nó không bao giờ bị bẩn thêm. Chương 4 nới lỏng một số giả định này.
Bài toán 8 ô số (8-puzzle), một ví dụ được hiển thị trong Hình 3.4, bao gồm một bảng 3×3 với tám ô được đánh số và một ô trống. Một ô liền kề với ô trống có thể trượt vào ô trống đó. Mục tiêu là đạt được một trạng thái mục tiêu cụ thể, chẳng hạn như trạng thái được hiển thị ở bên phải của hình. Công thức tiêu chuẩn như sau:

---

**Page 31**

EXAMPLE PROBLEMS
[Image of 8-puzzle:
Start State:
7 2 4
5   6
8 3 1

Goal State:
  1 2
3 4 5
6 7 8
]
Figure 3.4 A typical instance of the 8-puzzle.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
[Hình ảnh bài toán 8 ô số:
Trạng thái bắt đầu:
7 2 4
5   6
8 3 1

Trạng thái mục tiêu:
  1 2
3 4 5
6 7 8
]
Hình 3.4 Một ví dụ điển hình của bài toán 8 ô số.

---

**Page 32**

EXAMPLE PROBLEMS
*   States: A state description specifies the location of each of the eight tiles and the blank in one of the nine squares.
*   Initial state: Any state can be designated as the initial state. Note that any given goal can be reached from exactly half of the possible initial states (Exercise 3.5).
*   Actions: The simplest formulation defines the actions as movements of the blank space Left, Right, Up, or Down. Different subsets of these are possible depending on where the blank is.
*   Transition model: Given a state and action, this returns the resulting state; for example, if we apply Left to the start state in Figure 3.4, the resulting state has the 5 and the blank switched.
*   Goal test: This checks whether the state matches the goal configuration shown in Fig-

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
*   **Trạng thái (States):** Một mô tả trạng thái xác định vị trí của mỗi trong tám ô số và ô trống trong một trong chín ô vuông.
*   **Trạng thái ban đầu (Initial state):** Bất kỳ trạng thái nào cũng có thể được chỉ định là trạng thái ban đầu. Lưu ý rằng bất kỳ mục tiêu nào cho trước đều có thể đạt được từ đúng một nửa số trạng thái ban đầu có thể có (Bài tập 3.5).
*   **Hành động (Actions):** Công thức đơn giản nhất định nghĩa các hành động là các chuyển động của ô trống sang Trái, Phải, Lên hoặc Xuống. Các tập hợp con khác nhau của những hành động này là có thể tùy thuộc vào vị trí của ô trống.
*   **Mô hình chuyển tiếp (Transition model):** Với một trạng thái và hành động, hàm này trả về trạng thái kết quả; ví dụ, nếu chúng ta áp dụng Trái cho trạng thái bắt đầu trong Hình 3.4, trạng thái kết quả sẽ có số 5 và ô trống bị hoán đổi.
*   **Phép thử mục tiêu (Goal test):** Kiểm tra xem trạng thái có khớp với cấu hình mục tiêu được hiển thị trong Hình-

---

**Page 33**

EXAMPLE PROBLEMS
*   Path cost: Each step costs 1, so the path cost is the number of steps in the path.
What abstractions have we included here? The actions are abstracted to their beginning and final states, ignoring the intermediate locations where the block is sliding. We have abstracted away actions such as shaking the board when pieces get stuck and ruled out extracting the pieces with a knife and putting them back again. We are left with a description of the rules of the puzzle, avoiding all the details of physical manipulations.
The 8-puzzle belongs to the family of sliding-block puzzles, which are often used as test problems for new search algorithms in AI. This family is known to be NP-complete, so one does not expect to find methods significantly better in the worst case than the search algorithms described in this chapter and the next. The 8-puzzle has 9!/2 = 181,440 reachable states and is easily solved. The 15-puzzle (on a 4 × 4 board) has around 1.3 trillion states, and random instances can be solved optimally in a few milliseconds by the best search algorithms. The 24-puzzle (on a 5 × 5 board) has around 10<sup>25</sup> states, and random instances take several hours to solve optimally.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
*   **Chi phí đường đi (Path cost):** Mỗi bước tốn 1, vì vậy chi phí đường đi là số bước trong đường đi.
Chúng ta đã bao gồm những sự trừu tượng hóa nào ở đây? Các hành động được trừu tượng hóa thành trạng thái bắt đầu và kết thúc của chúng, bỏ qua các vị trí trung gian nơi khối đang trượt. Chúng ta đã trừu tượng hóa các hành động như lắc bảng khi các mảnh bị kẹt và loại bỏ việc lấy các mảnh ra bằng dao rồi đặt lại. Chúng ta còn lại một mô tả về các quy tắc của câu đố, tránh tất cả các chi tiết về thao tác vật lý.
Bài toán 8 ô số thuộc họ các bài toán khối trượt (sliding-block puzzles), thường được sử dụng làm bài toán kiểm tra cho các thuật toán tìm kiếm mới trong AI. Họ này được biết là NP-đầy đủ (NP-complete), vì vậy người ta không mong đợi tìm thấy các phương pháp tốt hơn đáng kể trong trường hợp xấu nhất so với các thuật toán tìm kiếm được mô tả trong chương này và chương tiếp theo. Bài toán 8 ô số có 9!/2 = 181.440 trạng thái có thể đạt được và dễ dàng giải được. Bài toán 15 ô số (trên bảng 4 × 4) có khoảng 1,3 nghìn tỷ trạng thái, và các trường hợp ngẫu nhiên có thể được giải tối ưu trong vài mili giây bằng các thuật toán tìm kiếm tốt nhất. Bài toán 24 ô số (trên bảng 5 × 5) có khoảng 10<sup>25</sup> trạng thái, và các trường hợp ngẫu nhiên mất vài giờ để giải tối ưu.

---

**Page 34**

The goal of the 8-queens problem is to place eight queens on a chessboard such that no queen attacks any other. (A queen attacks any piece in the same row, column or diagonal.) Figure 3.5 shows an attempted solution that fails: the queen in the rightmost column is attacked by the queen at the top left.
[Image of a chessboard with 6 queens placed, where one queen attacks another.]
Figure 3.5 Almost a solution to the 8-queens problem. (Solution is left as an exercise.)

**Tiếng Việt:**
Mục tiêu của bài toán 8 quân hậu (8-queens problem) là đặt tám quân hậu lên một bàn cờ sao cho không có quân hậu nào tấn công quân hậu nào khác. (Một quân hậu tấn công bất kỳ quân cờ nào trong cùng hàng, cột hoặc đường chéo.) Hình 3.5 cho thấy một giải pháp thử nghiệm thất bại: quân hậu ở cột ngoài cùng bên phải bị tấn công bởi quân hậu ở góc trên bên trái.
[Hình ảnh một bàn cờ với 6 quân hậu được đặt, trong đó một quân hậu tấn công một quân hậu khác.]
Hình 3.5 Gần như là một giải pháp cho bài toán 8 quân hậu. (Giải pháp được để lại như một bài tập.)

---

**Page 35**

EXAMPLE PROBLEMS
Although efficient special-purpose algorithms exist for this problem and for the whole n-queens family, it remains a useful test problem for search algorithms. There are two main kinds of formulation. An incremental formulation involves operators that augment the state description, starting with an empty state; for the 8-queens problem, this means that each action adds a queen to the state. A complete-state formulation starts with all 8 queens on the board and moves them around. In either case, the path cost is of no interest because only the final state counts. The first incremental formulation one might try is the following:
*   States: Any arrangement of 0 to 8 queens on the board is a state.
*   Initial state: No queens on the board.
*   Actions: Add a queen to any empty square.
*   Transition model: Returns the board with a queen added to the specified square.
*   Goal test: 8 queens are on the board, none attacked.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
Mặc dù tồn tại các thuật toán chuyên dụng hiệu quả cho bài toán này và cho cả họ bài toán n-quân hậu, nó vẫn là một bài toán kiểm tra hữu ích cho các thuật toán tìm kiếm. Có hai loại xây dựng bài toán chính. Một **xây dựng tăng dần (incremental formulation)** liên quan đến các toán tử làm tăng mô tả trạng thái, bắt đầu với một trạng thái trống; đối với bài toán 8 quân hậu, điều này có nghĩa là mỗi hành động thêm một quân hậu vào trạng thái. Một **xây dựng trạng thái hoàn chỉnh (complete-state formulation)** bắt đầu với tất cả 8 quân hậu trên bàn cờ và di chuyển chúng xung quanh. Trong cả hai trường hợp, chi phí đường đi không quan trọng vì chỉ có trạng thái cuối cùng được tính. Công thức tăng dần đầu tiên mà người ta có thể thử là như sau:
*   **Trạng thái (States):** Bất kỳ sự sắp xếp nào của 0 đến 8 quân hậu trên bàn cờ là một trạng thái.
*   **Trạng thái ban đầu (Initial state):** Không có quân hậu nào trên bàn cờ.
*   **Hành động (Actions):** Thêm một quân hậu vào bất kỳ ô trống nào.
*   **Mô hình chuyển tiếp (Transition model):** Trả về bàn cờ với một quân hậu được thêm vào ô được chỉ định.
*   **Phép thử mục tiêu (Goal test):** 8 quân hậu ở trên bàn cờ, không có quân nào bị tấn công.

---

**Page 36**

EXAMPLE PROBLEMS
In this formulation, we have 64 * 63 * ... * 57 ≈ 1.8 × 10<sup>14</sup> possible sequences to investigate. A better formulation would prohibit placing a queen in any square that is already attacked:
*   States: All possible arrangements of n queens (0 ≤ n ≤ 8), one per column in the leftmost n columns, with no queen attacking another.
*   Actions: Add a queen to any square in the leftmost empty column such that it is not attacked by any other queen.
This formulation reduces the 8-queens state space from 1.8 × 10<sup>14</sup> to just 2,057, and solutions are easy to find. On the other hand, for 100 queens the reduction is from roughly 10<sup>400</sup> states to about 10<sup>52</sup> states (Exercise 3.6)—a big improvement, but not enough to make the problem tractable. Section 4.1 describes the complete-state formulation, and Chapter 6 gives a simple algorithm that solves even the million-queens problem with ease.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
Trong công thức này, chúng ta có 64 * 63 * ... * 57 ≈ 1.8 × 10<sup>14</sup> chuỗi khả dĩ để điều tra. Một công thức tốt hơn sẽ cấm đặt một quân hậu vào bất kỳ ô nào đã bị tấn công:
*   **Trạng thái (States):** Tất cả các cách sắp xếp có thể của n quân hậu (0 ≤ n ≤ 8), mỗi cột một quân hậu trong n cột ngoài cùng bên trái, không có quân hậu nào tấn công quân hậu khác.
*   **Hành động (Actions):** Thêm một quân hậu vào bất kỳ ô nào trong cột trống ngoài cùng bên trái sao cho nó không bị tấn công bởi bất kỳ quân hậu nào khác.
Công thức này làm giảm không gian trạng thái của bài toán 8 quân hậu từ 1.8 × 10<sup>14</sup> xuống chỉ còn 2.057, và các giải pháp dễ dàng tìm thấy. Mặt khác, đối với 100 quân hậu, sự giảm thiểu là từ khoảng 10<sup>400</sup> trạng thái xuống còn khoảng 10<sup>52</sup> trạng thái (Bài tập 3.6)—một sự cải thiện lớn, nhưng không đủ để làm cho bài toán trở nên khả giải. Mục 4.1 mô tả công thức trạng thái hoàn chỉnh, và Chương 6 đưa ra một thuật toán đơn giản giải quyết ngay cả bài toán triệu quân hậu một cách dễ dàng.

---

**Page 37**

EXAMPLE PROBLEMS
Our final toy problem was devised by Donald Knuth (1964) and illustrates how infinite state spaces can arise. Knuth conjectured that, starting with the number 4, a sequence of factorial, square root, and floor operations will reach any desired positive integer. For example, we can reach 5 from 4 as follows:
⌊√⌈√⌈√⌈√(4!)!⌉!⌉!⌉⌋ = 5. (Note: OCR might be imperfect for the formula, the structure is nested roots and factorials with floor/ceiling)
The problem definition is very simple:
*   States: Positive numbers.
*   Initial state: 4.
*   Actions: Apply factorial, square root, or floor operation (factorial for integers only).
*   Transition model: As given by the mathematical definitions of the operations.
*   Goal test: State is the desired positive integer.
To our knowledge there is no bound on how large a number might be constructed in the process of reaching a given target-for example, the number 620,448,401,733,239,439,360,000 is generated in the expression for 5-so the state space for this problem is infinite. Such state spaces arise frequently in tasks involving the generation of mathematical expressions, circuits, proofs, programs, and other recursively defined objects.

**Tiếng Việt:**
CÁC BÀI TOÁN VÍ DỤ
Bài toán đồ chơi cuối cùng của chúng ta được phát minh bởi Donald Knuth (1964) và minh họa cách không gian trạng thái vô hạn có thể phát sinh. Knuth phỏng đoán rằng, bắt đầu với số 4, một chuỗi các phép toán giai thừa, căn bậc hai và làm tròn xuống (floor) sẽ đạt được bất kỳ số nguyên dương mong muốn nào. Ví dụ, chúng ta có thể đạt được số 5 từ số 4 như sau:
⌊√⌈√⌈√⌈√(4!)!⌉!⌉!⌉⌋ = 5. (Lưu ý: OCR có thể không hoàn hảo cho công thức, cấu trúc là các căn bậc hai và giai thừa lồng nhau với các phép làm tròn lên/xuống)
Định nghĩa bài toán rất đơn giản:
*   **Trạng thái (States):** Các số dương.
*   **Trạng thái ban đầu (Initial state):** 4.
*   **Hành động (Actions):** Áp dụng phép toán giai thừa, căn bậc hai, hoặc làm tròn xuống (giai thừa chỉ cho số nguyên).
*   **Mô hình chuyển tiếp (Transition model):** Như được cho bởi các định nghĩa toán học của các phép toán.
*   **Phép thử mục tiêu (Goal test):** Trạng thái là số nguyên dương mong muốn.
Theo hiểu biết của chúng tôi, không có giới hạn nào về độ lớn của một số có thể được tạo ra trong quá trình đạt được một mục tiêu nhất định—ví dụ, số 620.448.401.733.239.439.360.000 được tạo ra trong biểu thức cho số 5—vì vậy không gian trạng thái cho bài toán này là vô hạn. Các không gian trạng thái như vậy thường xuyên phát sinh trong các tác vụ liên quan đến việc tạo ra các biểu thức toán học, mạch điện, bằng chứng, chương trình và các đối tượng được định nghĩa đệ quy khác.

---

**Page 38**

REAL WORLD PROBLEM
We have already seen how the route-finding problem is defined in terms of specified locations and transitions along links between them. Route-finding algorithms are used in a variety of applications. Some, such as Web sites and in-car systems that provide driving directions, are relatively straightforward extensions of the Romania example. Others, such as routing video streams in computer networks, military operations planning, and airline travel-planning systems, involve much more complex specifications. Consider the airline travel problems that must be solved by a travel-planning Web site:
*   States: Each state obviously includes a location (e.g., an airport) and the current time. Furthermore, because the cost of an action (a flight segment) may depend on previous segments, their fare bases, and their status as domestic or international, the state must record extra information about these “historical" aspects.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
Chúng ta đã thấy cách bài toán tìm đường (route-finding problem) được định nghĩa dựa trên các vị trí cụ thể và các chuyển tiếp dọc theo các liên kết giữa chúng. Các thuật toán tìm đường được sử dụng trong nhiều ứng dụng khác nhau. Một số, chẳng hạn như các trang web và hệ thống trên ô tô cung cấp chỉ đường lái xe, là các mở rộng tương đối đơn giản của ví dụ Romania. Những ứng dụng khác, chẳng hạn như định tuyến luồng video trong mạng máy tính, lập kế hoạch hoạt động quân sự và hệ thống lập kế hoạch du lịch hàng không, liên quan đến các đặc tả phức tạp hơn nhiều. Hãy xem xét các vấn đề du lịch hàng không phải được giải quyết bởi một trang web lập kế hoạch du lịch:
*   **Trạng thái (States):** Mỗi trạng thái rõ ràng bao gồm một vị trí (ví dụ: một sân bay) và thời gian hiện tại. Hơn nữa, vì chi phí của một hành động (một chặng bay) có thể phụ thuộc vào các chặng bay trước đó, cơ sở giá vé của chúng, và tình trạng của chúng là nội địa hay quốc tế, trạng thái phải ghi lại thông tin bổ sung về các khía cạnh "lịch sử" này.

---

**Page 39**

REAL WORLD PROBLEM
*   Initial state: This is specified by the user's query.
*   Actions: Take any flight from the current location, in any seat class, leaving after the current time, leaving enough time for within-airport transfer if needed.
*   Transition model: The state resulting from taking a flight will have the flight's destination as the current location and the flight's arrival time as the current time.
*   Goal test: Are we at the final destination specified by the user?
*   Path cost: This depends on monetary cost, waiting time, flight time, customs and immigration procedures, seat quality, time of day, type of airplane, frequent-flyer mileage awards, and so on.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
*   **Trạng thái ban đầu (Initial state):** Điều này được chỉ định bởi truy vấn của người dùng.
*   **Hành động (Actions):** Thực hiện bất kỳ chuyến bay nào từ vị trí hiện tại, ở bất kỳ hạng ghế nào, khởi hành sau thời gian hiện tại, để lại đủ thời gian để chuyển tiếp trong sân bay nếu cần.
*   **Mô hình chuyển tiếp (Transition model):** Trạng thái kết quả từ việc thực hiện một chuyến bay sẽ có điểm đến của chuyến bay là vị trí hiện tại và thời gian đến của chuyến bay là thời gian hiện tại.
*   **Phép thử mục tiêu (Goal test):** Chúng ta có đang ở điểm đến cuối cùng do người dùng chỉ định không?
*   **Chi phí đường đi (Path cost):** Điều này phụ thuộc vào chi phí tiền tệ, thời gian chờ đợi, thời gian bay, thủ tục hải quan và nhập cảnh, chất lượng ghế ngồi, thời gian trong ngày, loại máy bay, giải thưởng dặm bay thường xuyên, v.v.

---

**Page 40**

REAL WORLD PROBLEM
Commercial travel advice systems use a problem formulation of this kind, with many additional complications to handle the byzantine fare structures that airlines impose. Any seasoned traveler knows, however, that not all air travel goes according to plan. A really good system should include contingency plans—such as backup reservations on alternate flights— to the extent that these are justified by the cost and likelihood of failure of the original plan.
Touring problems are closely related to route-finding problems, but with an important difference. Consider, for example, the problem "Visit every city in Figure 3.2 at least once, starting and ending in Bucharest." As with route finding, the actions correspond to trips between adjacent cities. The state space, however, is quite different. Each state must include not just the current location but also the set of cities the agent has visited. So the initial state would be In(Bucharest), Visited({Bucharest}), a typical intermediate state would be In(Vaslui), Visited({Bucharest, Urziceni, Vaslui}), and the goal test would check whether the agent is in Bucharest and all 20 cities have been visited.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
Các hệ thống tư vấn du lịch thương mại sử dụng một dạng xây dựng bài toán như thế này, với nhiều phức tạp bổ sung để xử lý các cấu trúc giá vé phức tạp mà các hãng hàng không áp đặt. Tuy nhiên, bất kỳ du khách dày dạn kinh nghiệm nào cũng biết rằng không phải tất cả các chuyến bay đều diễn ra theo kế hoạch. Một hệ thống thực sự tốt nên bao gồm các kế hoạch dự phòng—chẳng hạn như đặt chỗ dự phòng trên các chuyến bay thay thế—trong chừng mực những điều này được biện minh bởi chi phí và khả năng thất bại của kế hoạch ban đầu.
**Bài toán du lịch (Touring problems)** có liên quan chặt chẽ đến các bài toán tìm đường, nhưng có một điểm khác biệt quan trọng. Ví dụ, hãy xem xét bài toán "Thăm mọi thành phố trong Hình 3.2 ít nhất một lần, bắt đầu và kết thúc tại Bucharest." Cũng như tìm đường, các hành động tương ứng với các chuyến đi giữa các thành phố liền kề. Tuy nhiên, không gian trạng thái lại khá khác biệt. Mỗi trạng thái phải bao gồm không chỉ vị trí hiện tại mà còn cả tập hợp các thành phố mà tác nhân đã đến thăm. Vì vậy, trạng thái ban đầu sẽ là Ở(Bucharest), ĐãThăm({Bucharest}), một trạng thái trung gian điển hình sẽ là Ở(Vaslui), ĐãThăm({Bucharest, Urziceni, Vaslui}), và phép thử mục tiêu sẽ kiểm tra xem tác nhân có đang ở Bucharest và tất cả 20 thành phố đã được đến thăm hay không.

---

**Page 41**

REAL WORLD PROBLEM
The traveling salesperson problem (TSP) is a touring problem in which each city must be visited exactly once. The aim is to find the shortest tour. The problem is known to be NP-hard, but an enormous amount of effort has been expended to improve the capabilities of TSP algorithms. In addition to planning trips for traveling salespersons, these algorithms have been used for tasks such as planning movements of automatic circuit-board drills and of stocking machines on shop floors.
A VLSI layout problem requires positioning millions of components and connections on a chip to minimize area, minimize circuit delays, minimize stray capacitances, and maximize manufacturing yield. The layout problem comes after the logical design phase and is usually split into two parts: cell layout and channel routing. In cell layout, the primitive components of the circuit are grouped into cells, each of which performs some recognized function. Each cell has a fixed footprint (size and shape) and requires a certain number of connections to each of the other cells. The aim is to place the cells on the chip so that they do not overlap and so that there is room for the connecting wires to be placed between the cells.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
**Bài toán người bán hàng du lịch (traveling salesperson problem - TSP)** là một bài toán du lịch trong đó mỗi thành phố phải được đến thăm đúng một lần. Mục đích là tìm ra chuyến đi ngắn nhất. Bài toán này được biết là NP-khó, nhưng một lượng lớn nỗ lực đã được bỏ ra để cải thiện khả năng của các thuật toán TSP. Ngoài việc lập kế hoạch các chuyến đi cho người bán hàng du lịch, các thuật toán này đã được sử dụng cho các tác vụ như lập kế hoạch chuyển động của các máy khoan mạch tự động và các máy xếp hàng trong xưởng sản xuất.
Một **bài toán bố trí VLSI (VLSI layout problem)** đòi hỏi phải định vị hàng triệu thành phần và kết nối trên một con chip để giảm thiểu diện tích, giảm thiểu độ trễ mạch, giảm thiểu điện dung ký sinh và tối đa hóa năng suất sản xuất. Vấn đề bố trí xuất hiện sau giai đoạn thiết kế logic và thường được chia thành hai phần: bố trí ô (cell layout) và định tuyến kênh (channel routing). Trong bố trí ô, các thành phần nguyên thủy của mạch được nhóm thành các ô, mỗi ô thực hiện một số chức năng được công nhận. Mỗi ô có một dấu chân cố định (kích thước và hình dạng) và yêu cầu một số lượng kết nối nhất định đến mỗi ô khác. Mục đích là đặt các ô trên chip sao cho chúng không chồng chéo và có đủ không gian để đặt các dây kết nối giữa các ô.

---

**Page 42**

REAL WORLD PROBLEM
Channel routing finds a specific route for each wire through the gaps between the cells. These search problems are extremely complex, but definitely worth solving. Later in this chapter, we present some algorithms capable of solving them.
Robot navigation is a generalization of the route-finding problem described earlier. Rather than following a discrete set of routes, a robot can move in a continuous space with (in principle) an infinite set of possible actions and states. For a circular robot moving on a flat surface, the space is essentially two-dimensional. When the robot has arms and legs or wheels that must also be controlled, the search space becomes many-dimensional. Advanced techniques are required just to make the search space finite. We examine some of these methods in Chapter 25. In addition to the complexity of the problem, real robots must also deal with errors in their sensor readings and motor controls.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
**Định tuyến kênh (Channel routing)** tìm một tuyến đường cụ thể cho mỗi dây dẫn qua các khoảng trống giữa các ô. Những bài toán tìm kiếm này cực kỳ phức tạp, nhưng chắc chắn đáng để giải quyết. Sau này trong chương này, chúng tôi sẽ trình bày một số thuật toán có khả năng giải quyết chúng.
**Điều hướng robot (Robot navigation)** là một sự tổng quát hóa của bài toán tìm đường đã được mô tả trước đó. Thay vì đi theo một tập hợp các tuyến đường rời rạc, một robot có thể di chuyển trong một không gian liên tục với (về nguyên tắc) một tập hợp vô hạn các hành động và trạng thái có thể. Đối với một robot hình tròn di chuyển trên một bề mặt phẳng, không gian về cơ bản là hai chiều. Khi robot có tay và chân hoặc bánh xe cũng phải được điều khiển, không gian tìm kiếm trở thành nhiều chiều. Các kỹ thuật tiên tiến được yêu cầu chỉ để làm cho không gian tìm kiếm trở nên hữu hạn. Chúng tôi xem xét một số phương pháp này trong Chương 25. Ngoài sự phức tạp của vấn đề, các robot thực tế cũng phải đối phó với các lỗi trong показания датчиков (số đọc cảm biến) và điều khiển động cơ của chúng.

---

**Page 43**

REAL WORLD PROBLEM
Having formulated some problems, we now need to solve them. A solution is an action sequence, so search algorithms work by considering various possible action sequences. The possible action sequences starting at the initial state form a search tree with the initial state at the root; the branches are actions and the nodes correspond to states in the state space of the problem. Figure 3.6 shows the first few steps in growing the search tree for finding a route from Arad to Bucharest. The root node of the tree corresponds to the initial state, In(Arad). The first step is to test whether this is a goal state. (Clearly it is not, but it is important to check so that we can solve trick problems like "starting in Arad, get to Arad.") Then we need to consider taking various actions. We do this by expanding the current state; that is, applying each legal action to the current state, thereby generating a new set of states. In this case, we add three branches from the parent node In(Arad) leading to three new child nodes: In(Sibiu), In(Timisoara), and In(Zerind). Now we must choose which of these three possibilities to consider further.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
Sau khi đã xây dựng một số bài toán, bây giờ chúng ta cần giải quyết chúng. Một giải pháp là một chuỗi hành động, vì vậy các thuật toán tìm kiếm hoạt động bằng cách xem xét các chuỗi hành động khả thi khác nhau. Các chuỗi hành động khả thi bắt đầu từ trạng thái ban đầu tạo thành một **cây tìm kiếm (search tree)** với trạng thái ban đầu ở gốc; các nhánh là các hành động và các nút tương ứng với các trạng thái trong không gian trạng thái của bài toán. Hình 3.6 cho thấy một vài bước đầu tiên trong việc phát triển cây tìm kiếm để tìm một tuyến đường từ Arad đến Bucharest. Nút gốc của cây tương ứng với trạng thái ban đầu, Ở(Arad). Bước đầu tiên là kiểm tra xem đây có phải là trạng thái mục tiêu hay không. (Rõ ràng là không, nhưng việc kiểm tra là quan trọng để chúng ta có thể giải quyết các vấn đề mẹo như "bắt đầu ở Arad, đến Arad.") Sau đó, chúng ta cần xem xét việc thực hiện các hành động khác nhau. Chúng ta làm điều này bằng cách **mở rộng (expanding)** trạng thái hiện tại; nghĩa là, áp dụng từng hành động hợp lệ cho trạng thái hiện tại, qua đó tạo ra một tập hợp các trạng thái mới. Trong trường hợp này, chúng ta thêm ba nhánh từ nút cha Ở(Arad) dẫn đến ba nút con mới: Ở(Sibiu), Ở(Timisoara), và Ở(Zerind). Bây giờ chúng ta phải chọn xem xét tiếp khả năng nào trong ba khả năng này.

---

**Page 44**

REAL WORLD PROBLEM
This is the essence of search-following up one option now and putting the others aside for later, in case the first choice does not lead to a solution. Suppose we choose Sibiu first. We check to see whether it is a goal state (it is not) and then expand it to get In(Arad), In(Fagaras), In(Oradea), and In(RimnicuVilcea). We can then choose any of these four or go back and choose Timisoara or Zerind. Each of these six nodes is a leaf node, that is, a node with no children in the tree. The set of all leaf nodes available for expansion at any given point is called the frontier. (Many authors call it the open list, which is both geographically less evocative and less accurate, because other data structures are better suited than a list.) In Figure 3.6, the frontier of each tree consists of those nodes with bold outlines.

**Tiếng Việt:**
BÀI TOÁN THẾ GIỚI THỰC
Đây là bản chất của tìm kiếm—theo đuổi một lựa chọn ngay bây giờ và để các lựa chọn khác sang một bên để xem xét sau, trong trường hợp lựa chọn đầu tiên không dẫn đến giải pháp. Giả sử chúng ta chọn Sibiu trước. Chúng ta kiểm tra xem nó có phải là trạng thái mục tiêu không (không phải) và sau đó mở rộng nó để có được Ở(Arad), Ở(Fagaras), Ở(Oradea), và Ở(RimnicuVilcea). Sau đó, chúng ta có thể chọn bất kỳ một trong bốn nút này hoặc quay lại và chọn Timisoara hoặc Zerind. Mỗi một trong sáu nút này là một **nút lá (leaf node)**, nghĩa là một nút không có con trong cây. Tập hợp tất cả các nút lá có sẵn để mở rộng tại bất kỳ điểm nào cho trước được gọi là **biên (frontier)**. (Nhiều tác giả gọi nó là danh sách mở (open list), một thuật ngữ vừa ít gợi hình về mặt địa lý vừa kém chính xác hơn, bởi vì các cấu trúc dữ liệu khác phù hợp hơn một danh sách.) Trong Hình 3.6, biên của mỗi cây bao gồm những nút có đường viền đậm.

---

Đây là toàn bộ nội dung từ các trang bạn cung cấp. Hy vọng nó sẽ hữu ích cho việc học của bạn!