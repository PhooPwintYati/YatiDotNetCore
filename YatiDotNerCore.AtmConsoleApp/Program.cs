using System;
public class cardHolder
{
    string cardNum;
    int pin;
    string firstName;
    string lastName;
    double balance;
    public cardHolder(string cardNum, int pin, string firstName, string lastName, double balance)
    {
        this.cardNum = cardNum;
        this.pin = pin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    public string getNum()
    {
        return cardNum;
    }
    public int getPin()
    {
        return pin;
    }
    public string getFirstName()
    {
        return firstName;
    }
    public string getLastName()
    {
        return lastName;
    }
    public double getBalance()
    {
        return balance;
    }
    public void setNum(string newCardNum)
    {
        cardNum = newCardNum;
    }
    public void setpin(int newPin)
    {
        pin = newPin;
    }
    public void setFirstName(string newFirstName)
    {
        firstName = newFirstName;
    }
    public void setLastName(string newLastName)
    {
        lastName = newLastName;
    }
    public void setBalance(double newBalance)
    {
        balance = newBalance;
    }
    public static void Main(String[] args)
    {
        void printOptions()
        {
            Console.WriteLine("Please choose from one of the following optins...");
            Console.WriteLine("1. Deposit");
            Console.WriteLine("2. Withdraw");
            Console.WriteLine("3. Show Balance");
            Console.WriteLine("4. Exit");
        }
        void deposit(cardHolder currentUser)
        {
            Console.WriteLine("How much $$ would you like to deposit?");
            double deposit = Double.Parse(Console.ReadLine());
            currentUser.setBalance(currentUser.getBalance() + deposit);
            Console.WriteLine("Thank you for your $$. Your new balance is :" + currentUser.getBalance());
        }
        void withdraw(cardHolder currentUser)
        {
            Console.WriteLine("How much $$ would you like to withdraw?");
            double withdraw = Double.Parse(Console.ReadLine());
            //check if the user has enough money
            if (currentUser.getBalance() < withdraw)
            {
                Console.WriteLine("Insufficient Amount :(");
            }
            else
            {
                currentUser.setBalance(currentUser.getBalance() - withdraw);
                Console.WriteLine("You are good to go!Thank you :");
            }
        }
        void balance(cardHolder currentUser)
        {
            Console.WriteLine("Current balance:" + currentUser.getBalance());
        }
        List<cardHolder> cardHolders = new List<cardHolder>();
        cardHolders.Add(new cardHolder("012345678910", 1234, "Mg", "Soe", 15000.00));
        cardHolders.Add(new cardHolder("012345678911", 5678, "Hla", "Hla", 20000.00));
        cardHolders.Add(new cardHolder("012345678912", 2255, "Kyi", "Kyi", 1000.00));
        cardHolders.Add(new cardHolder("012345678913", 6657, "Aung", "Thu", 5000.00));
        cardHolders.Add(new cardHolder("012345678914", 9875, "Zoe", "lay", 500.00));
        //peomt user
        Console.WriteLine("Welcome to SimpleATM");
        Console.WriteLine("Please inset your debit card No. : ");
        String debitCardNum = "";
        cardHolder currentUser;
        while (true)
        {
            try
            {
                debitCardNum = Console.ReadLine();
                //check against our db
                currentUser = cardHolders.FirstOrDefault(x => x.cardNum == debitCardNum);
                if (currentUser != null) { break; }
                else { Console.WriteLine("Card is not recognized. Please try again"); }
            }
            catch
            {
                Console.WriteLine("Card is not recognized.Please try again");
            }
        }
        Console.WriteLine("Please Enter Your Pin:");

        int userPin = 0;
        int attempts = 0;
        int maxAttempts = 3;
        bool accountLocked = false;

        while (attempts < maxAttempts && !accountLocked)
        {
            try
            {
                userPin = int.Parse(Console.ReadLine());
                // Check against our db
                if (currentUser.getPin() == userPin)
                {
                    break;
                }
                else
                {
                    attempts++;
                    Console.WriteLine("Incorrect Pin. Attempts left: " + (maxAttempts - attempts));
                }
            }
            catch
            {
                attempts++;
                Console.WriteLine("Incorrect Pin. Attempts left: " + (maxAttempts - attempts));
            }

            if (attempts == maxAttempts)
            {
                Console.WriteLine("Too many incorrect attempts. Account locked.");
                accountLocked = true;
            }
        }

        if (!accountLocked)
        {
            Console.WriteLine("Welcome " + currentUser.getFirstName() + " XD ");
            int option = 0;
            do
            {
                printOptions();
                string userInput = Console.ReadLine();

                if (int.TryParse(userInput, out option))
                {
                    switch (option)
                    {
                        case 1:
                            deposit(currentUser);
                            break;
                        case 2:
                            withdraw(currentUser);
                            break;
                        case 3:
                            balance(currentUser);
                            break;
                        case 4:
                            break;
                        default:
                            Console.WriteLine("Invalid option. Please try again.");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a valid number.");
                }
            }
            while (option != 4);
            Console.WriteLine("Thank you! Have a nice day XD");
        }
    }
}


