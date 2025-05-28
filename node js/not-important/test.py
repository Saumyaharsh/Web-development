# Step 1: Read contents from students.txt
with open("students.txt", "r") as file:
    lines = file.readlines()

# Step 2: Extract names and marks
students = []
total_marks = 0

for line in lines:
    name, mark = line.strip().split(",")
    mark = int(mark)
    students.append((name, mark))
    total_marks += mark

# Step 3: Calculate average
average = total_marks / len(students)
print(f"Average mark: {average:.2f}")

# Step 4: Write above average students to above_average.txt
with open("above_average.txt", "w") as output_file:
    for name, mark in students:
        if mark > average:
            output_file.write(name + "\n")

print("Above-average students written to 'above_average.txt'.")
