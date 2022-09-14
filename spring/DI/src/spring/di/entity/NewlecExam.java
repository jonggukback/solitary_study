package spring.di.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;

public class NewlecExam implements Exam {


	private int kor;

	private int eng;

	private int math;

	private int com;
	
	public NewlecExam() {
		
	}
	
	public NewlecExam(int kor, int eng, int math, int com) {
		this.kor = kor;
		this.eng = eng;
		this.math = math;
		this.com = com;
	}
	
	public int getKor() {
		return kor;
	}
	public void setKor(int kor) {
		this.kor = kor;
	}

	public int getEng() {
		return eng;
	}

	public void setEng(int eng) {
		this.eng = eng;
	}

	public int getMath() {
		return math;
	}

	public void setMath(int math) {
		this.math = math;
	}

	public int getCom() {
		return com;
	}

	public void setCom(int com) {
		this.com = com;
	}

	@Override
	public int total() {
		
		/* Cross-cutting Concern */
		long start = System.currentTimeMillis();
		SimpleDateFormat dayTime = new SimpleDateFormat("YYYY-MM-DD HH:MM:SS");
		String str = dayTime.format(new Date(start));
		System.out.println(str);
		/* Cross-cutting Concern */
		
		int result = kor+eng+math+com;
		
		/* Cross-cutting Concern */
		long end = System.currentTimeMillis();
		String message = (end-start)+"ms가 걸림";
		System.out.println(message);
		/* Cross-cutting Concern */
		
		return result;
	}

	@Override
	public float avg() {
		float result = total() / 4.0f;
		return result;
	}

	@Override
	public String toString() {
		return "NewlecExam [kor=" + kor + ", eng=" + eng + ", math=" + math + ", com=" + com + "]";
	}
	
}
