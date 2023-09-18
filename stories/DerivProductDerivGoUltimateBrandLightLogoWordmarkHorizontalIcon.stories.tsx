import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBrandLightLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBrandLightLogoWordmarkHorizontalIcon',
  component: DerivProductDerivGoUltimateBrandLightLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBrandLightLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBrandLightLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
