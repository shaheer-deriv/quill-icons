import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaBrandDarkLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaBrandDarkLogoWordmarkVerticalIcon',
  component: DerivProductDerivNakalaBrandDarkLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaBrandDarkLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaBrandDarkLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
