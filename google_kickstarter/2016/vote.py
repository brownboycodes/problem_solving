def main():
    test_cases = get_test_cases()

    probability_list = get_a_in_lead_probability(test_cases)

    display_test_case_results(probability_list)


def get_test_cases():

    T = int(input())
    test_cases = []

    for i in range(T):
        t_case = input()
        t_case = list(map(int, t_case.split(" ")))
        test_cases.append(t_case)

    return test_cases


def get_a_in_lead_probability(test_cases):
    probability_list = []
    probability = 0

    for test_case in test_cases:
        probability = ((test_case[0] - test_case[1]) /
                       (test_case[0] + test_case[1]))
        probability = "{:.8f}".format(probability)
        probability_list.append(probability)

    return probability_list


def display_test_case_results(probability_list):
    for i in range(len(probability_list)):
        print(f"Case #{i + 1}: {probability_list[i]}")


if __name__=="__main__":
    main()