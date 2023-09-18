import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBlackLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBlackLogoWordmarkVerticalIcon',
  component: DerivProductDerivTraderBlackLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBlackLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBlackLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
