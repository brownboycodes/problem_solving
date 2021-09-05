def main():
    test_cases = get_test_cases()

    blue_count = count_number_of_blues(test_cases)

    display_test_case_results(blue_count)


def get_test_cases():

    T = int(input())
    test_cases = []

    for i in range(T):
        t_case = {}
        t_case['S'] = input()
        indices = input()
        [t_case["i"], t_case['j']] = list(map(int, indices.split(" ")))
        test_cases.append(t_case)

    return test_cases


def count_number_of_blues(test_cases):
    blue_count = []
    count = 0
    s = ''
    i = j = 0

    for test in test_cases:
        [s, i, j] = [test['S'], test['i'], test['j']]
        s = s*(j//len(s))
        s = s[i-1:j]
        count = s.count('B')
        blue_count.append(count)

    return blue_count


def display_test_case_results(blue_count):
    for i in range(len(blue_count)):
        print(f"Case #{i + 1}: {blue_count[i]}")


if __name__ == "__main__":
    main()
