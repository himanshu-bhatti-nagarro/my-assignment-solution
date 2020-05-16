import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { Router } from "@angular/router";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy("navigate"),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should login correctly", () => {
    component.username = "himanshu";
    component.password = "himanshu";
    component.login();
    expect(mockRouter.navigate).toHaveBeenCalledWith(["/dashboard"]);
  });

  it("should give incorrect username error", () => {
    component.username = "abc";
    component.password = "himanshu";
    component.login();
    expect(component.userError).toBe(true);
    expect(component.userErrorMsg).toBe("Username is invalid");
  });

  it("should give incorrect password error", () => {
    component.username = "himanshu";
    component.password = "abc";
    component.login();
    expect(component.passwordError).toBe(true);
    expect(component.pswdErrorMsg).toBe("Password is invalid");
  });

  it("should give username required error", () => {
    component.username = "";
    component.onBlurCalled("username", component.username);
    expect(component.userError).toBe(true);
    expect(component.userErrorMsg).toBe("Username is mandatoy");
  });

  it("should give password required error", () => {
    component.password = "";
    component.onBlurCalled("password", component.password);
    expect(component.passwordError).toBe(true);
    expect(component.pswdErrorMsg).toBe("password is mandatory");
  });

  it("should not give username required error", () => {
    component.username = "abc";
    component.onBlurCalled("username", component.username);
    expect(component.userError).toBe(false);
  });

  it("should not give password required error", () => {
    component.password = "abc";
    component.onBlurCalled("password", component.password);
    expect(component.passwordError).toBe(false);
  });
});
