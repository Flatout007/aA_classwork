class Employee
    attr_reader :name, :title, :salary, :boss
    
    def initialize(name,title,salary,boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @boss.employees << self if boss.nil? == false 
    end

    def bonus(multiplier)
       #salary * multiplier
       return @salary * multiplier
    end

end

class Manager < Employee
    attr_reader :employees
    def initialize(name,title,salary,boss=nil)
        super
        @employees = []
    end

    def bonus(multiplier)
        self.get_sub_salary * multiplier
    end

    def get_sub_salary
        sum_salary = 0
        return self.salary unless self.is_a?(Manager)
        
        @employees.each do |employee|
             if !employee.is_a?(Manager)
                sum_salary += employee.salary
              else 
                sum_salary += employee.get_sub_salary + employee.salary
             end
        end
        return sum_salary
    end
end

ned = Manager.new("ned", "founder", 100000000, nil)
darren = Manager.new("darren", "TA manager", 78000, ned)
shawna = Employee.new("shawna", "TA", 12000, darren)
david = Employee.new("david", "TA", 10000, darren)
puts ned.bonus(5)
puts darren.bonus(4)
puts david.bonus(3)

