import { Course } from '../model/course.model';

export const COURSER: Course[] = [{
    id: 1,
    course: 'Java Core Basic',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'Java Core Basic',
    price: 1000000,
    image: 'v4.jpg',
    status: '1'
}, {
    id: 2,
    course: 'Java Core Advanced',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'Java Core Advanced',
    price: 1000000,
    image: 'v2.jpg',
    status: '1'
}, {
    id: 3,
    course: 'Javascript Basic',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'Javascript (JS) đang là một trong số các ngôn ngữ được yêu thích và phổ biến nhất trên thế giới. Nắm vững cơ bản về JS sẽ tạo cho bạn một nền tảng tốt cho lập trình web, bạn có thể trở thành fullstack developer với JS và học các framework hot nhất hiện nay.',
    price: 750000,
    image: 'c-js.jpg',
    status: '1'
}, {
    id: 4,
    course: 'Database',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'DATABASE',
    price: 800000,
    image: 'c-database.jpg',
    status: '1'
}, {
    id: 5,
    course: 'HMLT/CSS',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'Bạn muốn xây dựng nên một trang web đơn giản hay phức tạp đều không thể thiếu HTML/CSS. Khóa học này sẽ cung cấp cho bạn những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên web chuyên nghiệp.',
    price: 1000000,
    image: 'c-html.jpg',
    status: '1'
}, {
    id: 6,
    course: 'Làm việc với Git',
    totalSlot: 3,
    // tslint:disable-next-line:max-line-length
    shotDescription: 'Git là một công cụ quản lý source rất nổi tiếng hiện nay, thậm chí bây giờ các nhà tuyển dụng còn đưa Git vào giống như một tiêu chuẩn khi tuyển dụng, vì vậy việc nắm bắt công cụ này là điều cần thiết với các lập trình viên hiện này.',
    price: 0,
    image: 'c-git.jpg',
    status: '1'
}];
