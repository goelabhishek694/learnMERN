module.exports = {
  answer: [
    `#include <bits/stdc++.h>
        using namespace std;
        
        int main(){
            int number_of_elements;
            cin >> number_of_elements;
            vector <int> array(number_of_elements);
            int sum_of_array = 0;
            
            for(int i = 0; i < number_of_elements; i++){
               cin >> array[i];
               sum_of_array += array[i];
            }
            
            cout << sum_of_array;
            return 0;
        }
`,
    `#include <bits/stdc++.h>
using namespace std;
string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
vector<int> compareTriplets(vector<int> a, vector<int> b) {
    int alice = 0;
    int bob = 0;
    vector <int> answer(2);
    for(int i = 0; i < 3; i++) {
        if (a[i] > b[i]) alice++;
        if (a[i] < b[i]) bob++;
    }
    answer[0] = alice;
    answer[1] = bob;
    return answer;
}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));
    string a_temp_temp;
    getline(cin, a_temp_temp);
    vector<string> a_temp = split(rtrim(a_temp_temp));
    vector<int> a(3);
    for (int i = 0; i < 3; i++) {
        int a_item = stoi(a_temp[i]);
        a[i] = a_item;
    }
    string b_temp_temp;
    getline(cin, b_temp_temp);
    vector<string> b_temp = split(rtrim(b_temp_temp));
    vector<int> b(3);
    for (int i = 0; i < 3; i++) {
        int b_item = stoi(b_temp[i]);
        b[i] = b_item;
    }
    vector<int> result = compareTriplets(a, b);
    for (size_t i = 0; i < result.size(); i++) {
        fout << result[i];
        if (i != result.size() - 1) {
            fout << " ";
        }
    }
    fout << "\n";
    fout.close();
    return 0;
}
string ltrim(const string &str) {
    string s(str);
    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );
    return s;
}
string rtrim(const string &str) {
    string s(str);
    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );
    return s;
}
vector<string> split(const string &str) {
    vector<string> tokens;
    string::size_type start = 0;
    string::size_type end = 0;
    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));
        start = end + 1;
    }
    tokens.push_back(str.substr(start));
    return tokens;
}
`,
    `#include <bits/stdc++.h>
using namespace std;
string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */
long aVeryBigSum(vector<long> ar) {
    long s = 0;
    for (int i = 0; i < ar.size(); i++) s += ar[i];
    return s;
}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));
    string ar_count_temp;
    getline(cin, ar_count_temp);
    int ar_count = stoi(ltrim(rtrim(ar_count_temp)));
    string ar_temp_temp;
    getline(cin, ar_temp_temp);
    vector<string> ar_temp = split(rtrim(ar_temp_temp));
    vector<long> ar(ar_count);
    for (int i = 0; i < ar_count; i++) {
        long ar_item = stol(ar_temp[i]);
        ar[i] = ar_item;
    }
    long result = aVeryBigSum(ar);
    fout << result << "\n";
    fout.close();
    return 0;
}
string ltrim(const string &str) {
    string s(str);
    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );
    return s;
}
string rtrim(const string &str) {
    string s(str);
    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );
    return s;
}
vector<string> split(const string &str) {
    vector<string> tokens;
    string::size_type start = 0;
    string::size_type end = 0;
    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));
        start = end + 1;
    }
    tokens.push_back(str.substr(start));
    return tokens;
}
`,
    `#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int arr[n][n];
    long long int d1=0; //First Diagonal
    long long int d2=0; //Second Diagonal
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
            if (i == j) d1 += arr[i][j];
            if (i == n - j - 1) d2 += arr[i][j];
        }
    }
    cout << abs(d1 - d2) << endl; //Absolute difference of the sums across the diagonals
    return 0;
}`,
  ],
};
