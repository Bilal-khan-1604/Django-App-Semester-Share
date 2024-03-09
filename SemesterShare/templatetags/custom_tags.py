# myapp/templatetags/custom_tags.py

from django import template

register = template.Library()

@register.simple_tag
def get_variable(key):
    variables = {
        'cor1': "Digital Computers Design Fundamentals",
        't-cor1' : "Mr. Hussain Saleem",
        'a-cor1' : "Digital computers design fundamentals focus on the design and implementation of digital systems using logic gates and sequential circuits. Students learn how to represent and manipulate information in binary form, design combinational and sequential logic circuits, and understand the principles behind digital systems and computer architecture.",

        'cor2': "BSCS-403: Assembly Language Programming",
        't-cor2' : "Miss Farheen Faisal Siddiqui",
        'a-cor2' : "Assembly language is a low-level programming language that is specific to a particular computer architecture. It is often used for writing programs that require direct hardware manipulation or optimization. Students learn about the architecture of a computer, instruction sets, memory management, and how to write efficient code at a low level.",

        'cor3': "BSCS-405: Mathematics III",
        't-cor3' : "Miss Maria Aman",
        'a-cor3' : "Linear algebra is a branch of mathematics that deals with vector spaces and linear mappings between these spaces. It has various applications in computer science, including computer graphics, machine learning, and data analysis. Students learn about matrices, vectors, eigenvalues, and eigenvectors, and how these concepts relate to real-world problem-solving.",

        'cor4': "BSCS-411: Discrete Mathematics",
        't-cor4' : "Miss Saima Ashraf",
        'a-cor4' : "Discrete mathematics focuses on mathematical structures that are distinct and separate, rather than continuous. It is a foundational course for computer science, covering topics such as logic, set theory, graph theory, combinatorics, and algorithms. Discrete mathematics provides the theoretical groundwork for understanding algorithms and computational processes.",

        'cor5': "BSCS-409: Materials, Semi-conductors & Devices",
        't-cor5' : "Mr. Bari Ahmed Khan",
        'a-cor5' : "This course explores the properties and applications of semiconductor materials in electronic devices. Students learn about the physical principles behind semiconductors, their behavior in electronic circuits, and the design and fabrication of semiconductor devices such as transistors and integrated circuits.",

        'cor6': "BSCS-408: Object-Oriented Programming",
        't-cor6' : "Mr. Mukesh Kumar Rathi",
        'a-cor6' : "OOP is a programming paradigm that revolves around the concept of objects, which encapsulate data and behavior. Students studying OOP learn about key principles such as encapsulation, inheritance, polymorphism, and abstraction. Common programming languages that support OOP include Java, C++, and Python"
    }
    return variables.get(key, None)