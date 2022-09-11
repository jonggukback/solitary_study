package spring.di;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.di.entity.Exam;
import spring.di.entity.NewlecExam;
import spring.di.ui.ExamConsole;
import spring.di.ui.GridExamConsole;
import spring.di.ui.InlineExamConsole;

public class Program {
	
	public static void main(String[] args) {
		Program main = new Program();
		//main.Injection();
		//main.SpringXmlInjection();
		main.BeanArrayList();
	}
	
	// 컬렉션을 빈으로 생성해보기
	public void BeanArrayList() {
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("spring/di/setting.xml");
		
		//List<Exam> exams = new ArrayList<>();
		List<Exam> exams = (List<Exam>) context.getBean("exams");
		
		for(Exam e : exams) {
			System.out.println(e);
		}
	}
	
	// 스프링이 주입 (.xml) 방법
	public void SpringXmlInjection() {
		
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("spring/di/setting.xml");
		
		Exam exam = context.getBean(Exam.class);
		System.out.println(exam.toString());
		
		//ExamConsole console = (ExamConsole) context.getBean("console");
		ExamConsole console = context.getBean(ExamConsole.class);
		console.print();
	}
	
	// 직접 주입
	public void Injection() {
		Exam exam = new NewlecExam();
		
		// Construction Injection - 생성자 주입
		ExamConsole console = new InlineExamConsole(exam);
		console.print();
		
		// Setter Injection - 세터 메서드 주입
		ExamConsole console2 = new GridExamConsole();
		console2.setExam(exam);
		console2.print();
	}
}
