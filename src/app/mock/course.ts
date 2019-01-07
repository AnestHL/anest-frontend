import { Course } from '../model/course.model';

export const COURSES: Course[] = [{
    id: 1,
    courseName: 'Java Core Basic',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Java Core Basic',
    description: '',
    benefit: '',
    price: 1000000,
    image: 'v4.jpg',
    status: 1
}, {
    id: 2,
    courseName: 'Java Core Advanced',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Java Core Advanced',
    description: '',
    benefit: '',
    price: 1000000,
    image: 'v2.jpg',
    status: 1
}, {
    id: 3,
    courseName: 'Javascript Basic',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Javascript (JS) đang là một trong số các ngôn ngữ được yêu thích và phổ biến nhất trên thế giới. Nắm vững cơ bản về JS sẽ tạo cho bạn một nền tảng tốt cho lập trình web, bạn có thể trở thành fullstack developer với JS và học các framework hot nhất hiện nay.',
    description: '',
    benefit: '',
    price: 750000,
    image: 'c-js.jpg',
    status: 1
}, {
    id: 4,
    courseName: 'Database',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'DATABASE',
    description: '',
    benefit: '',
    price: 800000,
    image: 'c-database.jpg',
    status: 1
}, {
    id: 5,
    courseName: 'HMLT/CSS',
    totalSlot: 10,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Bạn muốn xây dựng nên một trang web đơn giản hay phức tạp đều không thể thiếu HTML/CSS. Khóa học này sẽ cung cấp cho bạn những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên web chuyên nghiệp.',
    description: '',
    benefit: '',
    price: 1000000,
    image: 'c-html.jpg',
    status: 1
}, {
    id: 6,
    courseName: 'Làm việc với Git',
    totalSlot: 3,
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Git là một công cụ quản lý source rất nổi tiếng hiện nay, thậm chí bây giờ các nhà tuyển dụng còn đưa Git vào giống như một tiêu chuẩn khi tuyển dụng, vì vậy việc nắm bắt công cụ này là điều cần thiết với các lập trình viên hiện này.',
    description: '',
    benefit: '',
    price: 0,
    image: 'c-git.jpg',
    status: 1
}];
