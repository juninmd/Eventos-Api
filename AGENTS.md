```markdown
# AGENTS.md File Guidelines

These guidelines outline the approach to development for all AGENTS.md files within this repository. Adherence to these principles is crucial for maintaining a robust, maintainable, and scalable codebase.

## 1. DRY (Don't Repeat Yourself)

*   All logic, data models, and API definitions should be encapsulated within reusable components and functions.
*   Avoid duplicating code across multiple files.
*   Leverage existing libraries and frameworks whenever possible.
*   When reuse is unavoidable, carefully design the components to ensure minimal dependencies.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for the simplest solution that meets the requirements.
*   Minimize complexity within each component and function.
*   Avoid unnecessary features or abstractions.
*   Prioritize readability and understandability.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or function should have a single, well-defined responsibility.
*   **Open/Closed Principle:** The system should be extensible without modification. New functionality should be added through new classes/functions, not by modifying the existing code.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without changing the correctness of the program.
*   **Interface Segregation Principle:**  Clients shouldn't be forced to use interfaces they don’t need.
*   **Dependency Inversion Principle:** Interfaces should be preferred over concrete implementations.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required.
*   Avoid adding features or dependencies without a clear understanding of their purpose and necessity.
*   Refactor code incrementally, adding functionality only when it’s needed.

## 5. Testability & Mocking

*   All tests must be written using mocking frameworks (e.g., Mockito, unittest.mock).
*   No reliance on actual implementations or data.
*   Tests should isolate and verify the behavior of individual components and functions.
*   Tests should explicitly cover edge cases and error conditions.
*   All tests must be automated and run as part of the CI/CD pipeline.

## 6. Code Length & Structure

*   Maximum code length: 180 lines.
*   File structure: Use a consistent directory structure.
*   Clear comments and documentation within code.
*   Modular design: Break down large functions into smaller, well-named, and focused units.
*   Use consistent naming conventions.

## 7.  Specific File Structure (Example - Adapt as needed)

*   **`agent.py`:** Main entry point for the AGENTS project. Contains initialization, configuration, and basic API.
*   **`agent_data.py`:**  Defines data structures for agents, including user profiles, connection information, etc.
*   **`agent_logic.py`:** Contains core logic for agent operations (e.g., routing, communication, processing data).
*   **`agent_utils.py`:**  Reusable utility functions for data manipulation, formatting, and assertions.
*   **`test_agent.py`:** Contains all automated tests for agent functionality.
*   **`data_models.py`:** Defines data models for different types of agents.
*   **`config.py`:** Holds configuration settings for different agents.
*   **`api.py`:** Defines the API for interacting with the agents.

## 8.  Coding Standards

*   Use consistent indentation.
*   Follow PEP 8 style guide (if applicable).
*   Use meaningful variable and function names.
*   Write clean and readable code.

## 9.  Documentation

*   Each file should have a concise summary of its purpose.
*   Include documentation within the code itself using docstrings.
*   Provide comprehensive README files within each file explaining its purpose and usage.

## 10.  Version Control

*   Use Git for version control.
*   Commit changes frequently with descriptive messages.
*   Follow a clear branching strategy.

## 11.  Testing Guidelines**

*   All tests must be automated and runnable.
*   Tests should be written to cover all critical functionality.
*   Use a testing framework to simplify test setup and execution.

By adhering to these guidelines, we will collectively produce a high-quality, maintainable, and extensible AGENTS.md repository.
```